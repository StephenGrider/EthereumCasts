const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');


const provider = ganache.provider();
const web3 = new Web3(provider);
const { abi, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Lottery Contract', () => {
  it('deploys a contract', () => {
    assert.ok(lottery.options.address);
  });
  it('adds a player to the list and verifies that sender issued enough wei', async () => {
    try {
      await lottery.methods.addPlayer().send({
        from: accounts[0],
        value: web3.utils.toWei('0.01', 'ether')
      });
      assert(false);
    } catch (err) {
      assert(true);
    }

    await lottery.methods.addPlayer().send({
      from: accounts[0],
      value: web3.utils.toWei('0.2', 'ether')
    });

    let balance = await web3.eth.getBalance(lottery.options.address)
    assert.equal(web3.utils.toWei('0.21', 'ether'), balance);

    let players = await lottery.methods.getPlayers().call({ from: accounts[0] });
    await assert.equal(accounts[0], players[0]);
  })

  it('allows to pick a winner if sender is the manager', async () => {
    await lottery.methods.addPlayer().send({
      from: accounts[0],
      value: web3.utils.toWei('0.2', 'ether')
    });
    await lottery.methods.addPlayer().send({
      from: accounts[1],
      value: web3.utils.toWei('0.2', 'ether')
    });
    await lottery.methods.addPlayer().send({
      from: accounts[2],
      value: web3.utils.toWei('0.2', 'ether')
    });

    try {
      await lottery.methods.pickWinner().send({
        from: accounts[1]
      })
      assert(false);
    } catch (err) {
      assert(err);
    }

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    assert(true);
  })

  it("winner gets all ether accumulated and all players are removed", async () => {
    let initialBalance = await web3.eth.getBalance(accounts[1]);

    await lottery.methods.addPlayer().send({
      from: accounts[1],
      value: web3.utils.toWei('1', 'ether')
    });
    await lottery.methods.addPlayer().send({
      from: accounts[1],
      value: web3.utils.toWei('1', 'ether')
    });
    await lottery.methods.addPlayer().send({
      from: accounts[1],
      value: web3.utils.toWei('1', 'ether')
    });
    // let players = await lottery.methods.getPlayers().call();
    // assert.equal(3,players.length);
    

    let curBalance = await web3.eth.getBalance(accounts[1]);
    assert(initialBalance - web3.utils.toWei('3', 'ether') > curBalance);
    
    await lottery.methods.pickWinner().call();
    let finalBalance = await web3.eth.getBalance(accounts[1]);
    assert(initialBalance - web3.utils.toWei('4', 'ether')< finalBalance);

   players = await lottery.methods.getPlayers().call();
    assert.equal(0,players.length);
  })
});
