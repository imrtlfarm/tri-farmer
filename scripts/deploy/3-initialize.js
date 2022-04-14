async function main() {
  const vaultAddress = '0x14C253077d17c00e724Fabb0e90d8b69cfD142bD';
  const strategyAddress = '0xDc00C3e684e4F25A5C87c3D81eD3067C722F3d89';

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
