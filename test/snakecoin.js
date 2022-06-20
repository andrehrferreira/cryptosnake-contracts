const { expect } = require("chai");
const { ethers } = require("hardhat");
const { utils } = require("ethers");

describe("SnakeCoin", function () {
  let contract;
  let owner;
  let address1;
  
  before(async function () {
    [owner, address1] = await ethers.getSigners();
  });

  beforeEach(async function () {
      const SnakeCoinFactory = await ethers.getContractFactory("SnakeCoin");

      contract = await SnakeCoinFactory.deploy();
      contract = await contract.deployed();
  });

  it("should have the correct name and symbol", async function () {
      const name = await contract.name();
      const symbol = await contract.symbol();

      expect(name).to.equal("SnakeCoin");
      expect(symbol).to.equal("SCN");
  });

  it("should charge fees", async function () {
    await contract.connect(owner).transfer(address1.address, utils.parseEther("1000").toString());
    const address1Balance = await contract.balanceOf(address1.address);
    expect(address1Balance).to.equal(utils.parseEther("1000").toString());
  });
});
