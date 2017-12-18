var linkBytecode = function (bytecode, libraries) {
  for (var libraryName in libraries) {
    // truncate to 37 characters
    var internalName = libraryName.slice(0, 36);
    // prefix and suffix with __
    var libLabel = '__' + internalName + Array(37 - internalName.length).join('_') + '__';

    var hexAddress = libraries[libraryName];
    if (hexAddress.slice(0, 2) !== '0x' || hexAddress.length > 42) {
      throw new Error('Invalid address specified for ' + libraryName);
    }
    // remove 0x prefix
    hexAddress = hexAddress.slice(2);
    hexAddress = Array(40 - hexAddress.length + 1).join('0') + hexAddress;

    while (bytecode.indexOf(libLabel) >= 0) {
      bytecode = bytecode.replace(libLabel, hexAddress);
    }
  }

  return bytecode;
};

module.exports = {
  linkBytecode: linkBytecode
};
