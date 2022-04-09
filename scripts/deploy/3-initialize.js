async function main() {
  const vaultAddress = '0x35Fa7A3A12c9fA3D8B76618228Bb28322ffA6a47';
  const strategyAddress = '0x507Db6c0a7378917e1C619a6989661BD7d4Aa327';

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
