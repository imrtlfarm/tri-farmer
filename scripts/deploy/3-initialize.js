async function main() {
  const vaultAddress = '0x0f90bD5510F4d9478643162B65bB5A30A02ec514';
  const strategyAddress = '0xCCE3f1F0371aff8693f58c3bCB41887630045e5F';

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
