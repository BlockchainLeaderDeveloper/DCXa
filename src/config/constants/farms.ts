import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'DCXa',
    lpAddresses: {
      97: '',
      56: '0x00495f363ec5a7369a4cb1b62b5dff4ae03f9c22',
    },
    isTokenOnly: true,
    token: tokens.dcxa,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'DCXa-BUSD',
    lpAddresses: {
      97: '',
      56: '0x556d938e160d8545b1fde5b6e3aab6cb4d54a1d9',
    },
    token: tokens.dcxa,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'DCXa-BNB',
    lpAddresses: {
      97: '',
      56: '0x07a02e2ef0329643c74a779df63d21846c9c7ef3',
    },
    token: tokens.dcxa,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },

  // {
  //   pid: 3,
  //   lpSymbol: 'AMA-USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0db842E4784a1362BeCFdF7446621Cee6d8ac3F9',
  //   },
  //   token: tokens.ama,
  //   quoteToken: tokens.usdt,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'BTT-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x807d145F395D22059077eF42981333528F156ECB',
  //   },
  //   token: tokens.btt,
  //   quoteToken: tokens.ama,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'TRX-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7BBE72f5A3773A232673Ba46dFC064Dc61090109',
  //   },
  //   token: tokens.trx,
  //   quoteToken: tokens.ama,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'C98-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5D59E3420bFC03AacC6aF4A9bCE18C742c945c75',
  //   },
  //   token: tokens.c98,
  //   quoteToken: tokens.ama,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'CAKE-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3EefF65b9B8b18368F2F68669A190129904E3CF0',
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.ama,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'ETH-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x564f8B7F16677767F8d4C5C5c1D59e643F62430f',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.ama,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'LTC-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xAd48bAC6899daCf127646fDF01020d20FE1C8D0f',
  //   },
  //   token: tokens.ltc,
  //   quoteToken: tokens.ama,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'XRP-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa7EB085C1e105fb73EC60eD1CcE3a86085305964',
  //   },
  //   token: tokens.xrp,
  //   quoteToken: tokens.ama,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'LINK-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xAF690A085c830be95F1aAf44Dc8B6830eBC58be0',
  //   },
  //   token: tokens.link,
  //   quoteToken: tokens.ama,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'ADA-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x65Eb8cd9778cC87E9F8A8DB43871e6fC38d4Ab0e',
  //   },
  //   token: tokens.ada,
  //   quoteToken: tokens.ama,
  // },
  // {
  //   pid: 13,
  //   lpSymbol: 'DOT-AMA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc5dE85d92D2C5D2Fd94AE9B2b4F29Dd109330E1C',
  //   },
  //   token: tokens.dot,
  //   quoteToken: tokens.ama,
  // },

  // {
  //   pid: 15,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   },
  //   isTokenOnly: true,
  //   token: tokens.busd,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 16,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',  /* 0xd490E8eeB306558c764c806E1Ce159e7973eFaB2 */
  //   },
  //   isTokenOnly: true,
  //   token: tokens.usdt,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 17,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C', /* 0x2170Ed0880ac9A755fd29B2688956BD959F933F8 */
  //   },
  //   isTokenOnly: true,
  //   token: tokens.eth,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 18,
  //   lpSymbol: 'BTT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xdcfbB12DED3FEa12D2A078Bc6324131cD14bF835', /* 0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c */
  //   },
  //   isTokenOnly: true,
  //   token: tokens.btt,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 19,
  //   lpSymbol: 'ADA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1E249DF2F58cBef7EAc2b0EE35964ED8311D5623', /* 0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47 */
  //   },
  //   isTokenOnly: true,
  //   token: tokens.ada,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 20,
  //   lpSymbol: 'TRX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb5D108578Be3750209d1b3A8f45FFee8C5a75146', /* 0xbA2aE424d960c26247Dd6c32edC70B295c744C43 */
  //   },
  //   isTokenOnly: true,
  //   token: tokens.trx,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 21,
  //   lpSymbol: 'C98',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x49fa121aDBF2A17ceE092199d269a94054bEF973', /* 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c */
  //   },
  //   isTokenOnly: true,
  //   token: tokens.c98,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 22,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'
  //   },
  //   isTokenOnly: true,
  //   token: tokens.cake,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 23,
  //   lpSymbol: 'LTC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9B60DB1dA3BEc30ef144BA5a908147c562ff822A'
  //   },
  //   isTokenOnly: true,
  //   token: tokens.ltc,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 24,
  //   lpSymbol: 'XRP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8339CfC9002d1ecBB23b9DE95CF17AbF0A9c2ea8'
  //   },
  //   isTokenOnly: true,
  //   token: tokens.xrp,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 25,
  //   lpSymbol: 'LINK',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD'
  //   },
  //   isTokenOnly: true,
  //   token: tokens.link,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 26,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9fDaaB9312084298d210B8789629D3054230e998'
  //   },
  //   isTokenOnly: true,
  //   token: tokens.dot,
  //   quoteToken: tokens.busd,
  // },

]

export default farms
