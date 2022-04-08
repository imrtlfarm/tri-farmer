async function main() {
  const vaultAddress = '0xb71cE39DDf968da084bF1eF2D7B9525C284852f4';
  const strategyAddress = '0xf28027f51a265a0bd496372f5859Ed95CF51CFcB';

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
