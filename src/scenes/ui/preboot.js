import { MainScene } from "../Scene";

//const env = 'PRODUCTION'
const env = "DEV";

export default class PreBootScene extends MainScene {
  constructor() {
    super({ key: "prebootScene" });

    this.nextScene = "bootScene";
  }

  preload() {
    super.preload();
    // load files
    let urlBase = "";
    if (env == "PRODUCTION") {
      urlBase = awsPrefix;
    }

    // load ui
    const uiRoute = `${urlBase}assets/sprites/ui/`;

    this.load.image("title", uiRoute + "ecoland-logo.png");
    this.load.image("mainBG", uiRoute + "de_bg.jpg");
    this.load.on("complete", () => {
      this.changeToScene(this.nextScene);
    });
  }
}
