import { MainScene } from "../Scene";
import constants from "../../config/constants";
export default class SplashScene extends MainScene {
  constructor() {
    super({ key: "splashScene" });
    this.constants = constants;
    this.timesplash = this.constants.TIME_SPLASH;
    this.nextScene = "madeWithScene";
  }

  create(params) {
    super.create(params);
    this.logo = this.add.sprite(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      "logo"
    );

    this.time.delayedCall(
      this.timesplash,
      () => {
        this.changeToScene(this.nextScene);
      },
      [],
      this
    );
  }
}
