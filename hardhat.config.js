require("@nomiclabs/hardhat-waffle");
const fs = require('fs')
private_key = fs.readFileSync(".secret_key").toString().trim()

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 42
    },
    kovan:{
      url:`http://70.34.216.42:9933`,
      accounts:[1116ead9d0948bc7b873c97b17bad138a263841055d7202564395e8df18a4d27]
    }
    */
  },
  solidity: {
    version: "0.8.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
