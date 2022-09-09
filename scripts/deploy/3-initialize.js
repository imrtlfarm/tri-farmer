async function main() {
  const vaultAddress = '0xF48c8CC29F9395a552b65BC3a7C7F0CC4b1D3A0e'; // todo: should come from dynamic config file
  const strategyAddress = '0xE36537982f799765FB80D78b00d0d96bd2d0A2a7';

  if (!vaultAddress) {
    throw new Error('Please specify the vault address');
  }
  if (!strategyAddress) {
    throw new Error('Please specify the strategy address');
  }

  const Vault = await ethers.getContractFactory('ReaperVaultv1_4');
  const vault = Vault.attach(vaultAddress);

  // todo: should we wait for the transaction to complete here? with await tx.wait(1)?
  await vault.initialize(strategyAddress);

  console.log('Vault initialized');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
