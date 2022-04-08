async function main() {
  const vaultAddress = '0xC26709dE3F0e0e63064650df6680a6D94B7BCfEa';
  const strategyAddress = '0xcfcfB4056586095C528be842ea8ac65ee7E6d06f';

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
