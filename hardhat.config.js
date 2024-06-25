require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    sepolia:{
      url:"https://linea-sepolia.infura.io/v3/2XfGWfBKHPBW1uVGHs6SOWjYfI1",
      accounts:[
      `0x${"267861b4cee6ca9bdf99cdc35e158ebdfbb6d3aaad85720e0627784f367aa656"}`,
      ],
    }
  },
};
