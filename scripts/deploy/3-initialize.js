const strategyConfig = require('../../strategy.config');

async function main() {
  const vaultAddress = strategyConfig.vault.vaultAddress;
  const strategyAddress = strategyConfig.strategy.strategyAddress;

  if (!vaultAddress) {
    throw new Error('No vault address set in "strategyConfig.vault.vaultAddress"');
  }
  if (!strategyAddress) {
    throw new Error('No strategy address set in "strategyConfig.vault.strategyAddress"');
  }

  const Vault = await ethers.getContractFactory('ReaperVaultv1_4');
  const vault = Vault.attach(vaultAddress);

  await vault.initialize(strategyAddress);
  console.log('Vault initialized');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
