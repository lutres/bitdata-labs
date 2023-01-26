const hre = require("hardhat");

async function main() {

  const demoPro = await hre.ethers.getContractFactory("DemoPro");
  const DemoPro = await demoPro.deploy();

  await DemoPro.deployed();

  console.log(
    `Contrat Deployed : ${DemoPro.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
