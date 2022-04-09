async function main() {
  const vaultAddress = '0x7148331409F26056A8299020298Fa2530121D32B';
  const strategyAddress = '0x0B337aea6A47378031a7ca5E20d7b985Dff11F09';

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
