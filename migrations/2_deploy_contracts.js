/* eslint-disable no-undef */
const MemoryToken = artifacts.require("MemoryToken");

module.exports = function (deployer) {
  deployer.deploy(MemoryToken);
};
