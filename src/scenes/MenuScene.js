import Phaser from "phaser";
// Import and instance of the reach stdlib
import { loadStdlib } from "@reach-sh/stdlib";
// Env file value
import { valueKey } from "../App.js";
// Rand Labs MyAlgo Connect Javascript library
import MyAlgoConnect from "@randlabs/myalgo-connect";
// Loading the Standard Library
const stdlib = loadStdlib("ALGO");

stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: "MainNet",
    MyAlgoConnect,
  })
);

//MainNet
//TestNet
// Reach variables
var isToken = "";
var gameWalletBalance = "";
// Game variables
let width = 0;
let height = 0;
let playButton;
let algoButton;
let tokenButton;
let infoButton;
let panelButton;
let insertCoin;
let paytoken = false;
let payAlgo = false;
let playGamestatus = false;

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("HelloWorldScene");
  }

  preload() {}

  create() {
    //screen size game
    width = this.scale.gameSize.width;
    height = this.scale.gameSize.height;
    // Indicates the seleted payment and game status
    paytoken = false;
    payAlgo = false;
    playGamestatus = true;
    //load the sound
    this.soundBack = this.sound.add("menutheme", { loop: true, volume: 1.0 });
    this.soundbtn = this.sound.add("soundbtn", { loop: false, volume: 1.0 });
    //display the game bacground image
    this.add
      .sprite(width / 2, height / 2, "MenuBackGround")
      .setOrigin(0.5, 0.5)
      .setDepth(0);
    //add the game buttons
    playButton = this.add.image(1002, 357, "playbtn").setInteractive();
    algoButton = this.add.image(764, 560, "algoBtn").setInteractive();
    tokenButton = this.add.image(1227, 560, "tokenBtn").setInteractive();
    infoButton = this.add.image(1440, 1000, "infoBtn").setInteractive();
    insertCoin = this.add.image(990, 378, "insertCoin").setInteractive();

    playButton.setVisible(false);
    // loads:  function buttons state
    buttonsState();
    // loads:  info button
    infoButton.once(
      "pointerup",
      function () {
        panelButton = this.add.image(1564, 750, "infoPanel").setInteractive();

        closepanel();
      },
      this
    );
    // game start button
    playButton.once(
      "pointerup",
      function () {
        if (playGamestatus === false) {
          this.scene.start("GameScene");
          this.soundBack.stop();
          this.soundbtn.play();
        }
      },
      this
    );
    // loads:  function music start
    this.playBgMusic();
  }

  playBgMusic() {
    this.soundBack.play();
  }
}

function closepanel() {
  panelButton.once(
    "pointerup",
    function () {
      panelButton.destroy();
    },
    this
  );
}
function buttonsState() {
  tokenButton.once(
    "pointerup",
    function () {
      paytoken = true;
      payAlgo = false;
      console.log("fruits meow");
      if (paytoken === true) {
        payWithAlgoorToken();
      }
    },
    this
  );

  algoButton.once(
    "pointerup",
    function () {
      paytoken = false;
      payAlgo = true;
      console.log("fruits lago");
      if (payAlgo === true) {
        payWithAlgoorToken();
      }
    },
    this
  );
}
// function Arcade game insert coin
async function payWithAlgoorToken() {
  insertCoin.destroy();
  // amount to play
  const MICROALGOS = "100000";
  const Tokens = "500000000";
  //  Player connects is account
  const accAlice = await stdlib.getDefaultAccount();
  //  GameWallet account
  const accgameWallet = await stdlib.newAccountFromMnemonic(valueKey);
  //  checks Balance This ASAID was created for testing porpoises "85207737"
  const balAtomic = await stdlib.balanceOf(accAlice, "85207737");
  const balAtomicGameWallet = await stdlib.balanceOf(accgameWallet, "85207737");
  isToken = balAtomic;
  //Example. NFT ASAID minted on AlgoGems
  let NFTRARE = 948675109;
  let NFTEPIC = 948675109;
  await accAlice.tokenAccept(NFTRARE);
  await accAlice.tokenAccept(NFTEPIC);

  //  checks if the player have enough funds to play

  if (paytoken === true) {
    if (isToken > 500) {
      await stdlib.transfer(accAlice, accgameWallet, Tokens, "85207737");
    } else {
      alert("Please add your token and Opt-In ASAID");
    }
  }

  if (payAlgo === true) {
    await stdlib.transfer(accAlice, accgameWallet, MICROALGOS);
  }
  console.log(balAtomic);
  gameWalletBalance = stdlib.formatCurrency(balAtomicGameWallet, 4);

  console.log(gameWalletBalance);
  alert("Game Funded!");
  //  the player can play the game
  playButton.setVisible(true);
  playGamestatus = true;
}
