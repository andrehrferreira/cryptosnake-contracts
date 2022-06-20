const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SnakeCoin", function () {
  it("Should return the new greeting once it's changed", async function () {
    const SnakeCoin = await ethers.getContractFactory("SnakeCoin");
    const snakeCoin = await SnakeCoin.deploy();
    await snakeCoin.deployed();

    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
