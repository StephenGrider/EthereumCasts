const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  let result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )

  result = result.deploy({
    data: compiledFactory.bytecode
  })

  const newContractInstance = await result.send({
      from: accounts[0],
      gas: 1000000,
  })
  console.log('Contract deployed to', newContractInstance.options.address);
};
deploy();
