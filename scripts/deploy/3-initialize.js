async function main() {
  const vaultAddress = '0x8eBe67EB47418af102385e94aB93f6C9f05B6285';
  const strategyAddress = '0x8f6F1d58Ba65a021b9dd1045fF976CC07a7a9241';

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
