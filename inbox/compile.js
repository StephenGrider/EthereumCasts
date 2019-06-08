
const solc = require('solc');
const solConfig = require('./sol.config.js');


let compiled = solc.compile(JSON.stringify(solConfig));

let  Inbox = JSON.parse(compiled).contracts.Inbox.Inbox;


// console.log(JSON.stringify(Inbox.abi)); 
// console.log(JSON.stringify(Inbox.evm.bytecode)); 

module.exports = {
    abi: Inbox.abi,
    bytecode: Inbox.evm.bytecode
}
