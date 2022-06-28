const hre = require('hardhat');

const strategyConfig = {
  vault: {
    vaultAddress: '', // fill once vault deployed
    rfTokenName: 'TRI-USDT Trisolaris Crypt',
    rfTokenSymbol: 'rf-TRI-USDT',
    tvlCap: hre.ethers.constants.MaxUint256,
    depositFee: 0,
    wantAddress: '0x61C9E05d1Cdb1b70856c7a2c53fA9c220830633c',
  },
  strategy: {
    strategyAddress: '', // fill once strategy deployed
    contractName: 'ReaperStrategyTrisolarisUsdt',
    masterchef: '0x3838956710bcc9D122Dd23863a0549ca8D5675D6',
    router: '0x2CB45Edb4517d5947aFdE3BEAbF95A582506858B',
    poolId: 4,
  },
  strategists: [
    {name: 'anon1', address: '0x1E71AEE6081f62053123140aacC7a06021D77348'},
    {name: 'anon2', address: '0x81876677843D00a7D792E1617459aC2E93202576'},
    {name: 'anon3', address: '0x1A20D7A31e5B3Bc5f02c8A146EF6f394502a10c4'},
  ],
  paymentSplitterAddress: '0x63cbd4134c2253041F370472c130e92daE4Ff174',
  treasuryAddress: '0x0e7c5313E9BB80b654734d9b7aB1FB01468deE3b',
};

module.exports = strategyConfig;
