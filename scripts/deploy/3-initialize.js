async function main() {
  const vaultAddress = '0xaa67d669027adA5CD3B996c12394823FBb9dbA27';
  const strategyAddress = '0x873c088A05AfB0F254fe97b8A6677ee41a3F61BD';

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
