const strategyConfig = require('../../strategy.config');

async function main() {
  const Vault = await ethers.getContractFactory('ReaperVaultv1_4');

  const wantAddress = strategyConfig.vault.wantAddress;
  const tokenName = strategyConfig.vault.rfTokenName;
  const tokenSymbol = strategyConfig.vault.rfTokenSymbol;
  const depositFee = strategyConfig.vault.depositFee;
  const tvlCap = strategyConfig.vault.tvlCap;

  const vault = await Vault.deploy(wantAddress, tokenName, tokenSymbol, depositFee, tvlCap);

  await vault.deployed();
  console.log('Vault deployed to:', vault.address);
  console.log('Please copy the vault address into "strategy.config.js"');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
