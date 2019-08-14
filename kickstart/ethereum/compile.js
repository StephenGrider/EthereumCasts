const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
/// @dev This works currently.
const input = {
	    language: 'Solidity',
	    sources: {
	        'Campaign.sol' : {
	            content: source
	        }
	    },
	    settings: {
	        outputSelection: {
	            '*': {
	                '*': [ '*' ]
	            }
	        }
	    }
	};
/// @dev Gotta change this either.
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts;

fs.ensureDirSync(buildPath);

/// @notice This works.
for (let contract in output) {
	  	fs.outputJsonSync(
		    path.resolve(buildPath, contract.replace('.sol', '') + '.json'),
		    output[contract]
	  	);
	}
