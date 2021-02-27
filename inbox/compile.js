const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

var input = {
    language: 'Solidity',
    sources: {
      'Inbox.sol': {
        content: fs.readFileSync(inboxPath, 'utf8')
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  
  var output = JSON.parse(solc.compile(JSON.stringify(input)));
  //console.log(output.contracts['Inbox.sol']['Inbox'].abi);
  //console.log(output.contracts['Inbox.sol']['Inbox']['evm'].bytecode); to get bytecode
  module.exports = output.contracts['Inbox.sol']['Inbox'];