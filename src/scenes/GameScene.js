//import Phaser
import Phaser from "phaser";
// Import and instance of the reach stdlib
import { loadStdlib } from "@reach-sh/stdlib";
// Establish the backend connection
import * as backend from "../build/index.main.mjs";
// Env file value
import { valueKey } from "../App.js";
//PeraConnect package to sign transactions
import { PeraWalletConnect } from "@perawallet/connect";
//For signing transactions to work we need to use a custom wrapper for PeraConnect package
import MakePeraConnect from "../PeraWallet-wrapper.ts";
// Loading the Standard Library
const stdlib = loadStdlib("ALGO");

stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: "MainNet",
    WalletConnect: MakePeraConnect(PeraWalletConnect),
  })
);

// Reach variables
var isToken = "";
var balAtomic = "balance";
var balAtomicGameWallet = "balance";
var fmtGameWallet = "";
var fmt = "";
var NFTCode = "";

// Game variables
let width = 0;
let height = 0;
var player;
var coinsSprite;
var woodSprite;
var woodSprite1;
var woodSprite2;
var spikeSprite;
var arcSprite;
var key;
var doorSprite;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
let collectKeyArc = 0;

//music variables
let soundGameBack;
let soundbtn;
let soundgameover;
//Goals variables
let arcopen;
let keygrab;
let coinpickup;
let dooropen;
//NFT variable
let winbtngo;
let NFTValue = 0;

// Game class
export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {}

  create() {
    //screen size
    width = this.scale.gameSize.width;
    height = this.scale.gameSize.height;
    // load BackGround image and set the origin and Z position
    this.add
      .sprite(width / 2, height / 2, "BackGround")
      .setOrigin(0.5, 0.5)
      .setDepth(0);

    //The platforms group where player can jump on
    platforms = this.physics.add.staticGroup();

    platforms.create(365, 375, "block1");
    platforms.create(243, 859, "block2");
    platforms.create(546, 741, "block3");
    platforms.create(1027, 741, "block3");
    platforms.create(1151, 859, "block3");
    platforms.create(1271, 979, "block3");
    platforms.create(1451, 377, "block4");
    platforms.create(1628, 741, "block6");
    platforms.create(1629, 1100, "block6");

    // Load Sounds and music
    soundGameBack = this.sound.add("gametheme", { loop: true, volume: 0.5 });
    soundGameBack.play();
    soundgameover = this.sound.add("gameover", { loop: false, volume: 1.0 });
    soundbtn = this.sound.add("soundbtn", { loop: false, volume: 1.0 });
    arcopen = this.sound.add("arcopen", { loop: false, volume: 0.5 });
    keygrab = this.sound.add("keygrab", { loop: false, volume: 0.5 });
    coinpickup = this.sound.add("coinpickup", { loop: false, volume: 0.5 });
    dooropen = this.sound.add("dooropen", { loop: false, volume: 1.0 });

    //  Set all the elements from the game load images and animations
    coinsSprite = this.physics.add.group({
      key: "coins",
      repeat: 4,
      setXY: { x: 205, y: 204, stepX: 110 },
    });

    key = this.physics.add.image(72, 230, "key");
    collectKeyArc = 0;

    this.anims.create({
      key: "arc",
      frames: [{ key: "arc0" }, { key: "arc1", duration: 50 }],
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "door",
      frames: [{ key: "door0" }, { key: "door1", duration: 50 }],
      frameRate: 20,
      repeat: -1,
    });
    //sprite created has a Dynamic Physics body by default
    arcSprite = this.physics.add.image(1796, 246, "arc0");
    doorSprite = this.physics.add.image(1645, 922, "door1");
    spikeSprite = this.physics.add.image(790, 979, "spike");
    spikeSprite.body.allowGravity = false;
    spikeSprite.setImmovable(true);

    woodSprite = this.physics.add.image(666, 741, "wood");
    woodSprite.body.allowGravity = false;
    woodSprite.setImmovable(true);
    woodSprite1 = this.physics.add.image(786, 741, "wood");
    woodSprite1.body.allowGravity = false;

    woodSprite2 = this.physics.add.image(906, 741, "wood");
    woodSprite2.body.allowGravity = false;
    woodSprite2.setImmovable(true);
    // load the player and walk animations
    player = this.physics.add.sprite(1400, 246, "Walk");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("Walk", { start: 18, end: 35 }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("Walk", { start: 0, end: 17 }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "Walk", frame: 18 }],
      frameRate: 20,
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Collisions
    this.physics.add.collider(coinsSprite, platforms);
    this.physics.add.collider(key, platforms);
    this.physics.add.collider(arcSprite, platforms);
    this.physics.add.collider(doorSprite, platforms);
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, woodSprite);
    this.physics.add.collider(player, woodSprite1);
    this.physics.add.collider(player, woodSprite2);

    //  The score
    scoreText = this.add.text(16, 16, "SCORE: 0", {
      fontFamily: "CareerCriminalCS",
      fontSize: "50px",
      color: "#ffffff",
    });

    //  Collisions and actions
    this.physics.add.overlap(player, coinsSprite, collectCoins, null, this);
    this.physics.add.overlap(player, key, collectKey, null, this);
    this.physics.add.overlap(player, spikeSprite, playerGameOver, null, this);
    this.physics.add.overlap(player, doorSprite, EndLevel, null, this);
  }

  //  Player move and animation
  update() {
    if (gameOver) {
      return;
    }

    if (cursors.left.isDown) {
      player.setVelocityX(-160);

      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);

      player.anims.play("right", true);
    } else {
      player.setVelocityX(0);

      player.anims.play("turn");
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330);
    }
  }
}
//  collect coins
function collectCoins(player, coinsSprite) {
  coinpickup.play();
  coinsSprite.disableBody(true, true);

  //  Add and update the score
  score += 10;
  scoreText.setText("Score: " + score);
}
//  collect key
function collectKey(player, key) {
  keygrab.play();
  key.disableBody(true, true);
  collectKeyArc = 1;

  var y = Math.random();
  if (y < 0.5) {
    y = 0;
    NFTValue = y;
  } else {
    y = 1;
    NFTValue = y;
  }

  console.log(y);

  if (collectKeyArc === 1) {
    arcSprite.setTexture("arc1");
    doorSprite.setTexture("door0");
    dooropen.play();
    arcopen.play();
  }

  //  Add and update the score
  score += 100;
  scoreText.setText("Score: " + score);
}
//  player loose
function playerGameOver() {
  player.disableBody(true, true);
  console.log("gameOver");
  soundgameover.play();

  let gameoverimg = this.add
    .sprite(width * 0.5, height * 0.5, "gameoverimg")
    .setDepth(1);
  gameOver = true;
  score = 0;
  scoreText.setText("Score: " + score);
}
//  player ends level and win NFT
function EndLevel() {
  if (collectKeyArc === 1) {
    if (NFTValue === 0) {
      NFTCode = 948675109;
      let nftSprite = this.add.sprite(838, 462, "nftReward").setDepth(1);
      winbtngo = this.add
        .sprite(838, 831, "nftBtn")
        .setInteractive()
        .setDepth(1);
    } else if (NFTValue === 1) {
      NFTCode = 948675109;
      let nftSprite = this.add.sprite(838, 462, "nftReward1").setDepth(1);
      winbtngo = this.add
        .sprite(838, 831, "nftBtn")
        .setInteractive()
        .setDepth(1);
    }

    winbtngo.once(
      "pointerup",
      function () {
        GetNFT();

        player.disableBody(true, true);
      },
      this
    );
  }
}
//  Get the NFT
function GetNFT() {
  foundGameTableAccount();
}

async function foundGameTableAccount() {
  //  Minted NFT to the winner

  //  Player connects is account
  const accAlice = await stdlib.getDefaultAccount();
  //  GameWallet account
  const accgameWallet = await stdlib.newAccountFromMnemonic(valueKey);
  //Check if NFT OPT-IN or if exists
  balAtomic = await stdlib.balanceOf(accAlice, NFTCode);
  console.log("!!!!The value of balAtomic is " + balAtomic);

  fmt = (x) => stdlib.formatCurrency(balAtomic, 4);
  //Check how many NFT are on the GameWallet
  balAtomicGameWallet = await stdlib.balanceOf(accgameWallet, NFTCode);
  console.log("!!!!The value of balAtomicGameWallet is " + balAtomicGameWallet);
  //gamewallet format
  fmtGameWallet = (x) => stdlib.formatCurrency(balAtomicGameWallet, 4);

  console.log(fmt);
  console.log(fmtGameWallet);
  isToken = fmt;
  console.log("!!!!The value of balAtomic is " + isToken);

  // Receiver deploys the contract
  const ctcAlice = accAlice.contract(backend);
  console.log(ctcAlice);
  // Helper function to connect and address to the contract.
  const ctcGameWallet = accgameWallet.contract(backend, ctcAlice.getInfo());
  console.log(ctcGameWallet);

  //NFT amount and ASAID
  const amtA = "1";
  const asaId = NFTCode;
  //Define the NFT and Type
  const GAMENFT = ["NFT0", "NFT1"];
  const OUTCOME = ["Rare", "Epic"];
  // NFT to trade random value
  let trades = NFTValue;

  // Function to add the NFT value and the amount to trade and publish it to the frontend.
  const Player = (Who) => ({
    ...stdlib.hasRandom,
    getTrade: () => {
      const gamenft = trades;

      console.log(`${Who} played ${GAMENFT[gamenft]}`);

      return gamenft;
    },

    seeOutcome: (outcome) => {
      console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },

    informTimeout: () => {
      console.log(`${Who} observed a timeout`);
    },
  });

  // Attatches the player to the backend.
  await Promise.all([
    backend.Alice(ctcAlice, {
      ...Player("Alice"),

      getAmnTok: () => {
        console.log(`Alice proposes swap`);
        return [asaId, amtA];
      },
      // contract deadline tutorial value
      deadline: 10,
    }),
    // Deploy the contract and transfer the NFT.
    // Prints the final balances of all accounts
    backend.GameWallet(ctcGameWallet, {
      ...Player("GameWallet"),

      acceptNFT: (token, amt) => {
        console.log(
          `Game Table accepts Alice play result of ${fmtGameWallet(
            token,
            amt
          )}.`
        );

        alert("Congrats, you get an NFT!");
      },
    }),
  ]);
}
