
const solc = require('solc');
const solConfig = require('./sol.config.js');

let compiled = solc.compile(JSON.stringify(solConfig));
let  Lottery = JSON.parse(compiled).contracts.Lottery.Lottery;
 
// console.log('ABI',JSON.stringify(Lottery.abi)); 
// console.log('BYTECODE',JSON.stringify(Lottery.evm.bytecode)); 

module.exports = {
    abi: Lottery.abi,
    bytecode: Lottery.evm.bytecode
}
