const hre = require('hardhat');
const strategyConfig = require('../../strategy.config');

async function main() {
  const Strategy = await ethers.getContractFactory(strategyConfig.strategy.contractName);
  const treasuryAddress = strategyConfig.treasuryAddress;
  const paymentSplitterAddress = strategyConfig.treasuryAddress;
  const wantAddress = strategyConfig.vault.wantAddress;
  const poolId = strategyConfig.strategy.poolId;
  const strategists = strategyConfig.strategists.map((x) => x.address);
  const vaultAddress = '0x91580E0Cb78deCeF5f1889AD58E2Cb5c16075243';

  if (!vaultAddress) {
    throw new Error('No vault address set in "strategyConfig.vault.vaultAddress"');
  }

  const strategy = await hre.upgrades.deployProxy(
    Strategy,
    [vaultAddress, [treasuryAddress, paymentSplitterAddress], strategists, wantAddress, poolId],
    {kind: 'uups', timeout: 0},
  );

  await strategy.deployed();
  console.log('Strategy deployed to:', strategy.address);
  console.log('Please copy the strategy address into "strategy.config.js"');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
