const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface: interfaceAbi, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'wing ring core cushion guess barely write puzzle window slot sibling patient', 'https://rinkeby.infura.io/v3/66c147864c49427ba88d8c58d3b1db3c'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interfaceAbi))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
