const hre = require("hardhat");

async function main() {
  const SnakeCoin = await hre.ethers.getContractFactory("SnakeCoin");
  const snakeCoin = await SnakeCoin.deploy();

  await snakeCoin.deployed();

  console.log("SnakeCoin deployed to:", snakeCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
