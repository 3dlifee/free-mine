// Automatically generated with Reach 0.1.13 (c44a1544)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (c44a1544)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v119 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  
  const v122 = stdlib.protect(ctc2, await interact.getAmnTok(), {
    at: './index.rsh:52:57:application',
    fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:17:function exp)'],
    msg: 'getAmnTok',
    who: 'Alice'
    });
  const v123 = v122[stdlib.checkedBigNumberify('./index.rsh:52:57:application', stdlib.UInt_max, '0')];
  const v124 = v122[stdlib.checkedBigNumberify('./index.rsh:52:57:application', stdlib.UInt_max, '1')];
  const v127 = stdlib.protect(ctc0, await interact.getTrade(), {
    at: './index.rsh:54:53:application',
    fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:17:function exp)'],
    msg: 'getTrade',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v123, v124, v127, v119],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:58:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v129, v130, v131, v132], secs: v134, time: v133, didSend: v38, from: v128 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v129
        });
      ;
      const v147 = stdlib.safeAdd(v133, v132);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v129, v130, v131, v132], secs: v134, time: v133, didSend: v38, from: v128 } = txn1;
  ;
  ;
  const v147 = stdlib.safeAdd(v133, v132);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v147],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v128, v129, v130, v147],
      evt_cnt: 0,
      funcNum: 2,
      lct: v133,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v178, time: v177, didSend: v75, from: v176 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v129
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v178, time: v177, didSend: v75, from: v176 } = txn3;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:45:29:application',
      fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:68:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v151, time: v150, didSend: v47, from: v149 } = txn2;
    ;
    ;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v131), {
      at: './index.rsh:79:24:application',
      fs: ['at ./index.rsh:78:7:application call to [unknown function] (defined at: ./index.rsh:78:32:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function GameWallet(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for GameWallet expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for GameWallet expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v129, v130, v131, v132], secs: v134, time: v133, didSend: v38, from: v128 } = txn1;
  ;
  ;
  stdlib.protect(ctc2, await interact.acceptNFT(v129, v130), {
    at: './index.rsh:62:23:application',
    fs: ['at ./index.rsh:60:18:application call to [unknown function] (defined at: ./index.rsh:60:22:function exp)'],
    msg: 'acceptNFT',
    who: 'GameWallet'
    });
  
  const v147 = stdlib.safeAdd(v133, v132);
  const txn2 = await (ctc.sendrecv({
    args: [v128, v129, v130, v147],
    evt_cnt: 0,
    funcNum: 1,
    lct: v133,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:14:dot', stdlib.UInt_max, '0'), [[v130, v129]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v151, time: v150, didSend: v47, from: v149 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v130,
        kind: 'to',
        tok: v129
        });
      sim_r.txns.push({
        kind: 'from',
        to: v128,
        tok: v129
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v129
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v147],
    tys: [ctc3, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v128, v129, v130, v147],
      evt_cnt: 0,
      funcNum: 2,
      lct: v133,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v178, time: v177, didSend: v75, from: v176 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v129
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v178, time: v177, didSend: v75, from: v176 } = txn3;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:45:29:application',
      fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:28:function exp)', 'at ./index.rsh:68:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'GameWallet'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v151, time: v150, didSend: v47, from: v149 } = txn2;
    ;
    ;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v131), {
      at: './index.rsh:79:24:application',
      fs: ['at ./index.rsh:78:7:application call to [unknown function] (defined at: ./index.rsh:78:32:function exp)'],
      msg: 'seeOutcome',
      who: 'GameWallet'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAGAAEIIKCNBgQmAgABADEYQQGAKGRJIls1ASRbNQIpZIIDBHUO5AYE1jtIugTf2SMoNhoAjgMBTAExAUEAMQA1DzQNIls1EDQNJFs1DjQNgRBbNQw0DSVbNQuABE1+Byc0EBZQNA4WUDQMFlA0DVcYCFA0CxZQsDQQiAGPIQSIAcEiNA4yCogBtTIGNAsINQ00DzQOFlA0DBZQNA0WUCMyBjUCNQEpTFcAOGcoNAEWNAIWUGcxGSISRIgBWTQDQAAKgAQVH3x1NARQsCNDIzQBEkSIAVI0Cxc1EIAE1RUZFDQQFlCwNBCIASEyBjQNDEQ0DDQOMRY0ACMISTUACUcDOBQyChJEOBAhBRJEOBFPAhJEOBISRDQMNA40D4gBHyI0DjIKMgmIAPgxGYEFEkSIAOMiMgoyCYgBDkL/fyM0ARJEiADiNAsXNQyABJdO9xc0DBZQsDQMiACxMgY0DQ9EIjQOMgoyCYgAt0L/vIgAlyEEiADNNhoBNQ1C/sCIAIc2GgE1C0L/RYgAfDYaATULQv+qIjE0EkSBAjE1EkQiMTYSRCIxNxJEiABcgTivIiJC/u4xGSISREL/BiKyASEFshCyFLIRshKziSKyASOyELIHsgiziUiJTAlJNQYyCYgAbIkJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIkjNQOJSSISTDQCEhFEiTQGNAdKD0H/ukL/wrGyFUL/lElXACA1D0klWzUOSYEoWzUMgTBbNQ2JsUL/eTQGCDUGibGyCUL/fLFC/3g=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `44`,
    101: `45`,
    102: `46`,
    103: `46`,
    104: `47`,
    105: `48`,
    106: `49`,
    107: `49`,
    108: `50`,
    109: `51`,
    11: `2`,
    110: `52`,
    111: `52`,
    112: `53`,
    113: `53`,
    114: `53`,
    115: `54`,
    116: `55`,
    117: `55`,
    118: `56`,
    119: `57`,
    12: `2`,
    120: `58`,
    121: `60`,
    122: `60`,
    123: `61`,
    124: `61`,
    125: `61`,
    126: `62`,
    127: `62`,
    128: `63`,
    129: `63`,
    13: `2`,
    130: `63`,
    131: `64`,
    132: `66`,
    133: `66`,
    134: `67`,
    135: `67`,
    136: `68`,
    137: `68`,
    138: `68`,
    139: `69`,
    14: `2`,
    140: `69`,
    141: `70`,
    142: `70`,
    143: `71`,
    144: `72`,
    145: `72`,
    146: `74`,
    147: `74`,
    148: `75`,
    149: `75`,
    15: `2`,
    150: `76`,
    151: `77`,
    152: `78`,
    153: `78`,
    154: `79`,
    155: `80`,
    156: `81`,
    157: `81`,
    158: `82`,
    159: `83`,
    16: `4`,
    160: `84`,
    161: `85`,
    162: `85`,
    163: `87`,
    164: `87`,
    165: `88`,
    166: `88`,
    167: `89`,
    168: `90`,
    169: `91`,
    17: `4`,
    170: `91`,
    171: `91`,
    172: `92`,
    173: `93`,
    174: `94`,
    175: `94`,
    176: `95`,
    177: `96`,
    178: `96`,
    179: `97`,
    18: `5`,
    180: `98`,
    181: `99`,
    182: `100`,
    183: `100`,
    184: `101`,
    185: `102`,
    186: `103`,
    187: `105`,
    188: `105`,
    189: `105`,
    19: `5`,
    190: `107`,
    191: `107`,
    192: `108`,
    193: `108`,
    194: `108`,
    195: `110`,
    196: `110`,
    197: `110`,
    198: `110`,
    199: `110`,
    2: `2`,
    20: `5`,
    200: `110`,
    201: `111`,
    202: `111`,
    203: `112`,
    204: `113`,
    205: `115`,
    206: `116`,
    207: `118`,
    208: `119`,
    209: `119`,
    21: `6`,
    210: `120`,
    211: `121`,
    212: `122`,
    213: `122`,
    214: `122`,
    215: `123`,
    216: `123`,
    217: `124`,
    218: `125`,
    219: `125`,
    22: `7`,
    220: `126`,
    221: `126`,
    222: `126`,
    223: `126`,
    224: `126`,
    225: `126`,
    226: `127`,
    227: `127`,
    228: `128`,
    229: `129`,
    23: `8`,
    230: `130`,
    231: `132`,
    232: `132`,
    233: `133`,
    234: `133`,
    235: `133`,
    236: `134`,
    237: `134`,
    238: `135`,
    239: `135`,
    24: `9`,
    240: `136`,
    241: `137`,
    242: `138`,
    243: `138`,
    244: `139`,
    245: `139`,
    246: `142`,
    247: `142`,
    248: `143`,
    249: `143`,
    25: `10`,
    250: `144`,
    251: `145`,
    252: `146`,
    253: `147`,
    254: `147`,
    255: `148`,
    256: `149`,
    257: `149`,
    258: `150`,
    259: `150`,
    26: `11`,
    260: `151`,
    261: `151`,
    262: `152`,
    263: `153`,
    264: `154`,
    265: `154`,
    266: `155`,
    267: `155`,
    268: `156`,
    269: `157`,
    27: `11`,
    270: `158`,
    271: `158`,
    272: `159`,
    273: `159`,
    274: `160`,
    275: `161`,
    276: `162`,
    277: `162`,
    278: `163`,
    279: `164`,
    28: `12`,
    280: `167`,
    281: `167`,
    282: `169`,
    283: `169`,
    284: `171`,
    285: `171`,
    286: `172`,
    287: `172`,
    288: `172`,
    289: `174`,
    29: `13`,
    290: `175`,
    291: `175`,
    292: `176`,
    293: `176`,
    294: `177`,
    295: `177`,
    296: `178`,
    297: `178`,
    298: `178`,
    299: `180`,
    3: `2`,
    30: `14`,
    300: `180`,
    301: `181`,
    302: `181`,
    303: `182`,
    304: `183`,
    305: `185`,
    306: `185`,
    307: `185`,
    308: `187`,
    309: `188`,
    31: `14`,
    310: `188`,
    311: `189`,
    312: `189`,
    313: `190`,
    314: `190`,
    315: `190`,
    316: `191`,
    317: `191`,
    318: `191`,
    319: `193`,
    32: `15`,
    320: `194`,
    321: `194`,
    322: `195`,
    323: `196`,
    324: `197`,
    325: `197`,
    326: `197`,
    327: `198`,
    328: `198`,
    329: `199`,
    33: `16`,
    330: `200`,
    331: `200`,
    332: `201`,
    333: `201`,
    334: `201`,
    335: `201`,
    336: `201`,
    337: `201`,
    338: `202`,
    339: `202`,
    34: `18`,
    340: `203`,
    341: `204`,
    342: `205`,
    343: `207`,
    344: `207`,
    345: `208`,
    346: `208`,
    347: `208`,
    348: `209`,
    349: `209`,
    35: `18`,
    350: `210`,
    351: `210`,
    352: `211`,
    353: `212`,
    354: `214`,
    355: `216`,
    356: `216`,
    357: `217`,
    358: `217`,
    359: `218`,
    36: `18`,
    360: `218`,
    361: `219`,
    362: `219`,
    363: `219`,
    364: `220`,
    365: `220`,
    366: `220`,
    367: `222`,
    368: `222`,
    369: `222`,
    37: `18`,
    370: `223`,
    371: `223`,
    372: `224`,
    373: `224`,
    374: `224`,
    375: `225`,
    376: `225`,
    377: `225`,
    378: `226`,
    379: `226`,
    38: `18`,
    380: `227`,
    381: `227`,
    382: `227`,
    383: `229`,
    384: `229`,
    385: `229`,
    386: `230`,
    387: `230`,
    388: `230`,
    389: `231`,
    39: `18`,
    390: `231`,
    391: `232`,
    392: `232`,
    393: `232`,
    394: `234`,
    395: `234`,
    396: `234`,
    397: `235`,
    398: `235`,
    399: `235`,
    4: `2`,
    40: `18`,
    400: `236`,
    401: `236`,
    402: `237`,
    403: `237`,
    404: `237`,
    405: `239`,
    406: `240`,
    407: `240`,
    408: `241`,
    409: `242`,
    41: `18`,
    410: `243`,
    411: `243`,
    412: `244`,
    413: `244`,
    414: `245`,
    415: `246`,
    416: `247`,
    417: `248`,
    418: `248`,
    419: `249`,
    42: `18`,
    420: `250`,
    421: `251`,
    422: `252`,
    423: `252`,
    424: `253`,
    425: `254`,
    426: `255`,
    427: `255`,
    428: `255`,
    429: `256`,
    43: `18`,
    430: `256`,
    431: `257`,
    432: `258`,
    433: `259`,
    434: `260`,
    435: `260`,
    436: `260`,
    437: `262`,
    438: `262`,
    439: `263`,
    44: `18`,
    440: `264`,
    441: `265`,
    442: `267`,
    443: `267`,
    444: `267`,
    445: `269`,
    446: `270`,
    447: `270`,
    448: `271`,
    449: `271`,
    45: `18`,
    450: `272`,
    451: `272`,
    452: `273`,
    453: `273`,
    454: `274`,
    455: `274`,
    456: `275`,
    457: `275`,
    458: `276`,
    459: `277`,
    46: `18`,
    460: `279`,
    461: `280`,
    462: `280`,
    463: `281`,
    464: `282`,
    465: `282`,
    466: `283`,
    467: `283`,
    468: `284`,
    469: `284`,
    47: `18`,
    470: `285`,
    471: `286`,
    472: `288`,
    473: `289`,
    474: `291`,
    475: `292`,
    476: `293`,
    477: `294`,
    478: `294`,
    479: `295`,
    48: `18`,
    480: `295`,
    481: `296`,
    482: `296`,
    483: `296`,
    484: `297`,
    485: `299`,
    486: `300`,
    487: `301`,
    488: `301`,
    489: `301`,
    49: `18`,
    490: `302`,
    491: `303`,
    492: `303`,
    493: `306`,
    494: `306`,
    495: `307`,
    496: `307`,
    497: `308`,
    498: `309`,
    499: `310`,
    5: `2`,
    50: `18`,
    500: `311`,
    501: `311`,
    502: `312`,
    503: `313`,
    504: `313`,
    505: `314`,
    506: `314`,
    507: `315`,
    508: `315`,
    509: `316`,
    51: `19`,
    510: `317`,
    511: `318`,
    512: `318`,
    513: `319`,
    514: `320`,
    515: `321`,
    516: `322`,
    517: `322`,
    518: `323`,
    519: `324`,
    52: `19`,
    520: `325`,
    521: `327`,
    522: `328`,
    523: `328`,
    524: `329`,
    525: `331`,
    526: `332`,
    527: `333`,
    528: `334`,
    529: `335`,
    53: `19`,
    530: `335`,
    531: `336`,
    532: `337`,
    533: `338`,
    534: `339`,
    535: `341`,
    536: `341`,
    537: `342`,
    538: `342`,
    539: `343`,
    54: `20`,
    540: `344`,
    541: `345`,
    542: `345`,
    543: `345`,
    544: `346`,
    545: `346`,
    546: `346`,
    547: `348`,
    548: `349`,
    549: `349`,
    55: `20`,
    550: `350`,
    551: `350`,
    552: `350`,
    553: `352`,
    554: `353`,
    555: `353`,
    556: `353`,
    557: `354`,
    558: `354`,
    559: `355`,
    56: `20`,
    560: `356`,
    561: `357`,
    562: `358`,
    563: `358`,
    564: `359`,
    565: `360`,
    566: `360`,
    567: `361`,
    568: `362`,
    569: `362`,
    57: `20`,
    570: `363`,
    571: `363`,
    572: `364`,
    573: `365`,
    574: `365`,
    575: `366`,
    576: `368`,
    577: `369`,
    578: `369`,
    579: `369`,
    58: `20`,
    580: `371`,
    581: `371`,
    582: `372`,
    583: `373`,
    584: `373`,
    585: `374`,
    586: `376`,
    587: `377`,
    588: `377`,
    589: `378`,
    59: `20`,
    590: `378`,
    591: `378`,
    592: `380`,
    593: `381`,
    6: `2`,
    60: `20`,
    61: `20`,
    62: `22`,
    63: `24`,
    64: `24`,
    65: `25`,
    66: `25`,
    67: `26`,
    68: `26`,
    69: `27`,
    7: `2`,
    70: `28`,
    71: `29`,
    72: `29`,
    73: `30`,
    74: `30`,
    75: `31`,
    76: `32`,
    77: `33`,
    78: `33`,
    79: `34`,
    8: `2`,
    80: `34`,
    81: `35`,
    82: `35`,
    83: `36`,
    84: `37`,
    85: `37`,
    86: `38`,
    87: `38`,
    88: `39`,
    89: `40`,
    9: `2`,
    90: `41`,
    91: `41`,
    92: `42`,
    93: `42`,
    94: `42`,
    95: `42`,
    96: `42`,
    97: `42`,
    98: `43`,
    99: `43`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T0","name":"v240","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v243","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v246","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062000d0a9081380391601f1980601f85011683019360018060401b0392848610848711176200039f578160a09286926040988952833981010312620003b557835160a08101818110848211176200039f578552835181526020808501516001600160a01b039291908381168103620003b55781830190815287870151968884019788526060810151916060850192835260808092015198828601998a52436003558a51958587018781108b8211176200039f578c52600080975260049460ff865416620003885760c08d7fe29e3d6fc3d8a76bea7703913ed0f9e529edcc20b9e5a9b7b84ffa4b21f79e6f9281519133835285518b8401528c885116908301528551606083015251878201528d5160a0820152a15180159081156200037b575b50156200036457346200034d578a51968388018881108b8211176200033a578c528588019a878c528c8901928884528260608b01958a8752338c5251168d5251835251430180431162000327574381106200032357835260019a8b8855438c55818d51995116878a015251168b8801525160608701525181860152845260a0840184811087821117620003105788528351958611620002fd57600254908782811c92168015620002f2575b83831014620002df5750601f811162000293575b508093601f86116001146200022b575050918394918493946200021f575b50501b916000199060031b1c1916176002555b5161094f9081620003bb8239f35b015192503880620001fe565b600283528183209493928692918316915b888383106200027857505050106200025e575b505050811b0160025562000211565b015160001960f88460031b161c191690553880806200024f565b8587015188559096019594850194879350908101906200023c565b60028352818320601f870160051c810191838810620002d4575b601f0160051c019087905b828110620002c8575050620001e0565b848155018790620002b8565b9091508190620002ad565b634e487b7160e01b845260229052602483fd5b91607f1691620001cc565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8780fd5b634e487b7160e01b885260118652602488fd5b634e487b7160e01b885260418652602488fd5b8a5163100960cb60e01b8152600981860152602490fd5b8a5163100960cb60e01b8152600881860152602490fd5b9050600154143862000121565b8c5163100960cb60e01b8152600781880152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe60806040526004361015610018575b361561001657005b005b6000803560e01c9081631e93b0f11461007f57508063573b851014610076578063832307571461006d578063ab53f2c6146100645763f5a239bc0361000e5761005f61029e565b61000e565b5061005f61022c565b5061005f61020d565b5061005f6100b4565b3461009b578060031936011261009b5760035460805260206080f35b80fd5b60209060031901126100af57600490565b600080fd5b506101df6100da6100c43661009e565b60006040516100d281610399565b52369061048f565b6100e86001600054146105ea565b6101656101056100f66103e4565b602080825183010191016104df565b9161012161011c61011860045460ff1690565b1590565b61060a565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159660405180610151843383610548565b0390a1518015908115610201575b5061062a565b6101746060820151431061064a565b61017e341561066a565b6020810180519091906101cd906101bf906001600160a01b0316936101b26101ad60408601968751903361089f565b61068a565b516001600160a01b031690565b91516001600160a01b031690565b9151916001600160a01b03169061074a565b600080556101ed6000600155565b6101f5610562565b60405160008152602090f35b9050600154143861015f565b50346100af5760003660031901126100af576020600154604051908152f35b50346100af5760008060031936011261009b5780546102496103e4565b906040519283918252602090604082840152835191826040850152815b83811061028757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610266565b5061033260606102b06100c43661009e565b6102be6001600054146106aa565b6103286102cc6100f66103e4565b916102e46102df61011860045460ff1690565b6106ca565b7f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a60405180610314843383610548565b0390a151801590811561033c575b506106ea565b015143101561070a565b6101df341561072a565b90506001541438610322565b90600182811c92168015610378575b602083101461036257565b634e487b7160e01b600052602260045260246000fd5b91607f1691610357565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176103b457604052565b6103bc610382565b604052565b601f909101601f19168101906001600160401b038211908210176103b457604052565b60405190600082600254916103f883610348565b80835260019380851690811561046e5750600114610420575b5061041e925003836103c1565b565b6002600090815260008051602061092383398151915294602093509091905b81831061045657505061041e935082010138610411565b8554888401850152948501948794509183019161043f565b905061041e94506020925060ff191682840152151560051b82010138610411565b91908260209103126100af57604051602081016001600160401b038111828210176104be575b60405291358252565b6104c6610382565b6104b5565b51906001600160a01b03821682036100af57565b908160809103126100af5760405190606090608083016001600160401b0381118482101761053b575b604052610514816104cb565b8352610522602082016104cb565b6020840152604081015160408401520151606082015290565b610543610382565b610508565b6001600160a01b0390911681529051602082015260400190565b61056d600254610348565b806105755750565b601f811160011461058857506000600255565b6002600090815290600190601f0160051c600080516020610923833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b8181106105e057505050602081208160025555565b83815582016105cb565b156105f157565b60405163100960cb60e01b8152600a6004820152602490fd5b1561061157565b60405163100960cb60e01b8152600b6004820152602490fd5b1561063157565b60405163100960cb60e01b8152600c6004820152602490fd5b1561065157565b60405163100960cb60e01b8152600d6004820152602490fd5b1561067157565b60405163100960cb60e01b8152600e6004820152602490fd5b1561069157565b60405163100960cb60e01b8152600f6004820152602490fd5b156106b157565b60405163100960cb60e01b815260106004820152602490fd5b156106d157565b60405163100960cb60e01b815260116004820152602490fd5b156106f157565b60405163100960cb60e01b815260126004820152602490fd5b1561071157565b60405163100960cb60e01b815260136004820152602490fd5b1561073157565b60405163100960cb60e01b815260146004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526107c693600093849392849190608081016001600160401b038111828210176107cd575b6040525193165af16107b66107af6107da565b809261083f565b5060208082518301019101610827565b156100af57565b6107d5610382565b61079c565b3d15610822573d906001600160401b038211610815575b60405191610809601f8201601f1916602001846103c1565b82523d6000602084013e565b61081d610382565b6107f1565b606090565b908160209103126100af575180151581036100af5790565b156108475790565b80511561085657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156108775790565b80511561088657805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610912936000938493909284919060a081016001600160401b03811182821017610915575b6040525193165af16107b661090b6107da565b809261086f565b90565b61091d610382565b6108f856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 3338,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:68:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "GameWallet": GameWallet
  };
export const _APIs = {
  };
