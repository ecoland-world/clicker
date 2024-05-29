import { AUTO, Scale, Game } from "phaser";
import constants from "./config/constants";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: AUTO,
  width: constants.WIDTH,
  height: constants.HEIGHT,
  parent: "game-container",
  backgroundColor: constants.BACKGROUND_COLOR,
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [],
};

export default new Game(config);
