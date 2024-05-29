import { AUTO, Scale, Game } from "phaser";
import constants from "./config/constants";
import PreBootScene from "./scenes/ui/preboot";
import BootScene from "./scenes/ui/boot";
import SplashScene from "./scenes/ui/splash";
import MadeWithScene from "./scenes/ui/madeWith";
import CreditsScene from "./scenes/ui/credits";
import HUDGameScene from "./scenes/game/HUDGame";
import GameScene from "./scenes/game/game";
import getTimeManager from "./managers/TimeManager";
import getSceneManager from "./managers/sceneManager";
import gs from "./config/gameStats";

getTimeManager().start();

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
  scene: [
    PreBootScene,
    BootScene,
    SplashScene,
    MadeWithScene,
    CreditsScene,
    HUDGameScene,
    GameScene,
  ],
};

// init managers
// getSceneManager(config.scene);

// setTimeout(() => {
//   document.querySelector("canvas").focus();
//   window.focus();
//   document.querySelector("canvas").oncontextmenu = function (e) {
//     e.preventDefault();
//   };
// }, 1000);

// // how it works with game context?
if (constants.DAT_GUI_ENABLE) {
  gs.setListener("game.backgroundColor", (val) => {
    let color = Phaser.Display.Color.HexStringToColor(val);
    game.renderer.config.backgroundColor = color;
  });

  gs.setListener("scene.restart", (val) => {
    gs.stats.scene.restart = false;
    getSceneManager().restartScene();
  });

  gs.setListener("scene.current", (val) => {
    getSceneManager().changeToScene(val);
  });
}

export default new Game(config);
