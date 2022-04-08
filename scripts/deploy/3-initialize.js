async function main() {
  const vaultAddress = '0xb03ED40Ba9df099D71eB2d4CB3AE52aC06147170';
  const strategyAddress = '0xBC4508E6dFa08cb301066C35a723F331A484a2DE';

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
