let SimpleToken = artifacts.require("./SimpleToken.sol");

/*
const afterDeploy = async function () {
  console.log("After deploy script..");

  ...

  console.log("After deploy script ended.");
};
*/

module.exports = function(deployer, network, accounts) {
  const ownerAccount = accounts[0];

  deployer.deploy(SimpleToken, {from: ownerAccount});
//    .then(async () => await afterDeploy());
};
