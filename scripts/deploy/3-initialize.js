async function main() {
  const vaultAddress = '0x55e939Ffe73D635e90fEA4084a1F4dB54fcAFbca';
  const strategyAddress = '0x335E1D1496daeb030C6d9B69e00a51d8e3d08000';

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
