const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode } = require('./compile');
const{INFURA_API, ACCT_MNEMONIC} = require('./config.js');

const provider = new HDWalletProvider(  ACCT_MNEMONIC, INFURA_API);
const web3 = new Web3(provider);

const deploy = async() => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi,{gas:'1000000'})
  .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
  .send({from: accounts[0]})

  console.log('Contract deployed to', result.options.address);
}