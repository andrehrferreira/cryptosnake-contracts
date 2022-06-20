require("@nomiclabs/hardhat-waffle");
require("@symblox/hardhat-abi-gen");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "local",
  networks: {
    local: {
      url: "http://localhost:7545",
      accounts: {
        mnemonic: "reopen attack sell kit safe cotton estate slender soon actual where link"
      },
      gas: 2100000,
      gasPrice: 8000000000,
    }
  }
};
