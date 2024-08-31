import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from "dotenv";
dotenv.config();

//
const acc1 = process.env.ACC_1_PK!;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/7RBY00UZ-qIy4zDbCwOqiI0b9dT9y6N0",
      accounts: [acc1],
      chainId: 11155111,
    },
  },
};

export default config;
