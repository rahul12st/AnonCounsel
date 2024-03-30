require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/EM2AHR0wZICPaLznaNDReMWZWF9T1cuf",
      accounts:[
      `0x${"267861b4cee6ca9bdf99cdc35e158ebdfbb6d3aaad85720e0627784f367aa656"}`,
      ],
    }
  },
};
