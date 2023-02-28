import Phaser from "phaser";

import GameScene from "./scenes/GameScene";
import MenuScene from "./scenes/MenuScene";
import PreloadScene from "./scenes/Preload";

const config = {
  type: Phaser.AUTO,
  autoCenter: 1,
  scaleMode: 3,
  parent: "phaser-container",
  backgroundColor: "#282c34",
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1920,
    height: 1080,
    min: {
      width: 320,
      height: 480,
    },
    max: {
      width: 1920,
      height: 1080,
    },
  },

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [PreloadScene, GameScene, MenuScene],
};
export default new Phaser.Game(config);
