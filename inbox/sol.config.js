const path = require('path');
const fs = require('fs');
const SRC_DIR= path.join(__dirname,'contracts');


module.exports = {
    "language": "Solidity",
    "sources": {
        "Inbox": {
            "content": fs.readFileSync(`${SRC_DIR}/Inbox.sol`, "utf8")
        }
    },
    "settings": {
        "outputSelection": {
            "*": {
                "*": [
                    "abi",
                    "evm.bytecode"
                ]
            }
        }
    }
}