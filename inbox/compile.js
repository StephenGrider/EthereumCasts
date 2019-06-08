
const solc = require('solc');
const solConfig = require('./sol.config.js');


let compiled = solc.compile(JSON.stringify(solConfig));

let  {Inbox} = JSON.parse(compiled).contracts;

console.log(Inbox); 

module.exports = Inbox;
