const path = require('path');
const fs = require('fs');
const solc = require('solc');
const solConfig = require('./sol.config.js');

const inboxPath = path.join(__dirname, 'contracts/Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

let compiled = solc.compile(solConfig, 1);

console.log(compiled);

module.exports = JSON.parse(compiled).contracts.Inbox;
