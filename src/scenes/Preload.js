import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    var progress = this.add.graphics();
    var loadingText = this.add.text(250, 200, "Loading: ", {
      fontSize: "32px",
      fill: "#FFF",
    });

    this.load.on("progress", function (value) {
      progress.clear();
      progress.fillStyle(0x3587e2, 1);
      progress.fillRect(0, 270, 800 * value, 60);

      value = value * 100;
      loadingText.setText("Loading: " + value.toFixed(2) + "%");
    });

    this.load.on("complete", function () {
      progress.destroy();
    });

    this.load.script(
      "webfont",
      "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
    );

    //  Inject our CSS
    let element = document.createElement("style");

    document.head.appendChild(element);

    let sheet = element.sheet;

    let styles =
      '@font-face { font-family: "CareerCriminalCS"; src: url("./assets/fonts/CareerCriminalCS.otf") format("opentype"); }\n';

    sheet.insertRule(styles, 0);

    this.load.image("BackGround", "./assets/background.png");
    this.load.image("MenuBackGround", "./assets/gameReachMenu.png");
    this.load.image("playbtn", "./assets/playbtn.png");
    this.load.image("algoBtn", "./assets/algoBtn.png");
    this.load.image("tokenBtn", "./assets/tokenBtn.png");
    this.load.image("nftBtn", "./assets/nftBtn.png");
    this.load.image("coins", "./assets/coin.png");
    this.load.image("key", "./assets/key.png");
    this.load.image("infoBtn", "./assets/infoBTN.png");
    this.load.image("infoPanel", "./assets/infopanel.png");
    this.load.image("insertCoin", "./assets/insertCoin.png");

    this.load.image("block1", "./assets/platforms/block1.png");
    this.load.image("block2", "./assets/platforms/block2.png");
    this.load.image("block3", "./assets/platforms/block3.png");
    this.load.image("block4", "./assets/platforms/block4.png");
    this.load.image("block5", "./assets/platforms/block5.png");
    this.load.image("block6", "./assets/platforms/block6.png");
    this.load.image("shadowLevel", "./assets/shadowLevel.png");
    this.load.image("gameoverimg", "./assets/gameoverimg.png");

    this.load.image("spike", "./assets/pikes.png");
    this.load.image("wood", "./assets/baseWood.png");

    this.load.image("nftReward", "./assets/nft/nftReward.png");
    this.load.image("nftReward1", "./assets/nft/nftReward1.png");

    this.load.audio("menutheme", ["./assets/music/menumusic.mp3"]);

    this.load.audio("gametheme", ["assets/music/gamemusic.mp3"]);

    this.load.audio("soundbtn", ["assets/sounds/openbtn.wav"]);

    this.load.audio("keygrab", ["assets/sounds/keygrab.wav"]);

    this.load.audio("gameover", ["assets/sounds/gameover.wav"]);

    this.load.audio("coinpickup", ["assets/sounds/coinpickup.wav"]);

    this.load.audio("arcopen", ["assets/sounds/arcopen.wav"]);

    this.load.audio("dooropen", ["assets/sounds/dooropen.wav"]);

    this.load.spritesheet("Walk", "./assets/walkPlayer/walk.png", {
      frameWidth: 80,
      frameHeight: 102,
    });

    this.load.path = "./assets/arc/";

    this.load.image("arc0", "arc0.png");
    this.load.image("arc1", "arc1.png");

    this.load.path = "./assets/door/";

    this.load.image("door0", "door0.png");
    this.load.image("door1", "door1.png");
  }

  create() {
    this.scene.start("HelloWorldScene");
  }
}

export default Preload;
