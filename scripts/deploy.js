const hre = require("hardhat");

async function main() {
  const NAME = "GPTMembership";
  const SYMBOL = "GPT";

  // Get the deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the deployer's balance
  const balance = await deployer.getBalance();
  console.log("Account balance:", hre.ethers.utils.formatEther(balance), "ETH");

  // Get contract factory
  const GPTMembership = await hre.ethers.getContractFactory("GPTMembership");

  // Estimate gas required for deployment
  const gasEstimate = await hre.ethers.provider.estimateGas(GPTMembership.getDeployTransaction(NAME, SYMBOL));
  console.log("Estimated gas required:", gasEstimate.toString());

  // Get current gas price
  const gasPrice = await hre.ethers.provider.getGasPrice();
  console.log("Current gas price:", hre.ethers.utils.formatUnits(gasPrice, 'gwei'), "gwei");

  // Calculate deployment cost in ETH
  const deploymentCost = gasEstimate.mul(gasPrice);
  console.log("Estimated deployment cost:", hre.ethers.utils.formatEther(deploymentCost), "ETH");

  // Check if the deployer has enough balance
  if (balance.lt(deploymentCost)) {
    console.error("Insufficient balance to deploy the contract");
    return;
  }

  // Deploy the contract
  const gPTMembership = await GPTMembership.deploy(NAME, SYMBOL);
  await gPTMembership.deployed();

  console.log(`GPTMembership deployed to: ${gPTMembership.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
