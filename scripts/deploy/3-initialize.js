async function main() {
  const vaultAddress = '0x91580E0Cb78deCeF5f1889AD58E2Cb5c16075243';
  const strategyAddress = '0x80a2442da702e86B36644a377051dd01570a778d';

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
