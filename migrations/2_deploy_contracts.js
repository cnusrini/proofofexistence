//var PoE = artifacts.require("./ProofOfExistence1.sol");
var PoE2 = artifacts.require("./ProofOfExistence2.sol");

module.exports = function(deployer) {
  //deployer.deploy(PoE);
  deployer.deploy(PoE2);
};
