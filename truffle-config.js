

const HDWalletProvider = require('@truffle/hdwallet-provider');
const keys =  require("./keys.json")

const privateKeys = ['0x0e591ea46cde08d45a5637acff6a74aea09cc62a68e08c3edecc7ad264ec2938'];
module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          privateKeys, 
          'https://eth-rinkeby.alchemyapi.io/v2/KNAnaN0Mm7sVYyF5wwLJJqFruE0gYatx'
        ),
      network_id: 4,
      networkCheckTimeout: 1000000000,
      skipDryRun: true,
    }
  },
  compilers: {
    solc: {
      version: "0.8.11",
    }
  }
}