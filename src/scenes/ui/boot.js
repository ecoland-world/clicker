import constants from "../../config/constants";
import { MainScene } from "../Scene";
//const env = 'PRODUCTION'
const env = "DEV";

export default class BootScene extends MainScene {
  constructor() {
    super({ key: "bootScene" });
    this.constants = constants;

    this.nextScene = this.constants.AFTER_BOOT_SCENE;
  }

  preload() {
    super.preload();
    this.add.image(0, 0, "mainBG").setOrigin(0, 0);
    this.add.image(320, 400, "title");

    let progressBox = this.add.graphics();
    let progressBar = this.add.graphics();

    let width = this.cameras.main.width;
    let height = this.cameras.main.height;

    let loadingText = this.add.text(width / 2, height / 2 + 100, "LOADING...", {
      fontFamily: "CalvertMT-Bold",
      color: "#fff",
      align: "center",
      fontSize: "56px",
    });
    loadingText.setStroke("#000", 6);
    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.add.text(width / 2, height / 2 + 190, "0%", {
      fontFamily: "CalvertMT-Bold",
      color: "#fff",
      align: "center",
      fontSize: "32px",
    });
    percentText.setStroke("#000", 4);
    percentText.setOrigin(0.5, 0.5);

    let assetText = this.add.text(width / 2, height / 2 + 270, "", {
      fontFamily: "CalvertMT-Bold",
      color: "#fff",
      align: "center",
      fontSize: "36px",
    });
    assetText.setStroke("#000000", 4);
    assetText.setOrigin(0.5, 0.5);

    progressBox.fillStyle(0x666666, 1);
    progressBox.fillRect(width / 2 - 300, height / 2 + 140, 600, 100);

    this.load.on("progress", (value) => {
      progressBar.clear();
      progressBar.fillStyle(0x333333, 1);
      progressBar.fillRect(
        width / 2 + 10 - 300,
        height / 2 + 150,
        580 * value,
        80
      );
      percentText.setText(parseInt(value * 100) + "%");
    });

    this.load.on("fileprogress", (file) => {
      assetText.setText(file.key + " ready");
    });

    this.load.on("complete", () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();

      this.changeToScene(this.nextScene);
    });

    // load files
    let urlBase = "";
    if (env == "PRODUCTION") {
      urlBase = awsPrefix;
    }
    // load logo
    this.load.image("logo", urlBase + "assets/phaserLogo.png");

    // load ui
    const uiRoute = `${urlBase}assets/sprites/ui/`;

    this.load.image("avatar", uiRoute + "avatar.png");
    this.load.image("mainBG", uiRoute + "de_bg.jpg");
    this.load.image("businessBg", uiRoute + "section_bg.png");
    this.load.image("businnesDisabled", uiRoute + "section_disabled.png");
    this.load.image("iconBg", uiRoute + "icon_bg.png");
    this.load.image("iconBar", uiRoute + "icon_bar.png");
    this.load.image("iconBarLoad", uiRoute + "icon_bar_load.png");
    this.load.image("progressLoadBar", uiRoute + "load_bar.png");
    this.load.image("progressFillBar", uiRoute + "load_fill_bar.png");
    this.load.image("buyButton", uiRoute + "buy_button.png");
    this.load.image("buyButtonHover", uiRoute + "buy_button_hover.png");
    this.load.image("buyButtonPressed", uiRoute + "buy_button_pressed.png");
    this.load.image("buyButtonDisabled", uiRoute + "buy_button_disabled.png");
    this.load.image("timeBox", uiRoute + "time_box.png");
    this.load.image("hireButton", uiRoute + "hire_button.png");
    this.load.image("hireButtonHover", uiRoute + "hire_button_hover.png");
    this.load.image("hireButtonPressed", uiRoute + "hire_button_pressed.png");
    this.load.image("hireButtonDisabled", uiRoute + "hire_button_disabled.png");
    this.load.image("managerBG", uiRoute + "manager_bg.png");
    this.load.image("infoBox", uiRoute + "info.png");
    this.load.image("farmerGirl", uiRoute + "farmer_girl.png");
    this.load.image("arrow", uiRoute + "arrow.png");
    this.load.image("notificationBG", uiRoute + "notification.png");

    this.load.spritesheet(
      "progressSpriteBar",
      uiRoute + "load_fill_bar_sprite.png",
      {
        frameWidth: 344,
        frameHeight: 34,
      }
    );

    // load characters
    const characterRoute = `${urlBase}assets/sprites/characters/`;
    this.load.image("manager1", characterRoute + "manager1.png");
    this.load.image("manager2", characterRoute + "manager2.png");
    this.load.image("manager3", characterRoute + "manager3.png");
    this.load.image("manager4", characterRoute + "manager4.png");
    this.load.image("manager5", characterRoute + "manager5.png");
    this.load.image("manager6", characterRoute + "manager6.png");
    this.load.image("manager7", characterRoute + "manager7.png");
    this.load.image("manager8", characterRoute + "manager8.png");
    this.load.image("manager9", characterRoute + "manager9.png");

    // load icons
    const iconsRoute = `${urlBase}assets/sprites/business/`;
    this.load.image("shovel", iconsRoute + "shovel.png");
    this.load.image("clio", iconsRoute + "clio.png");
    this.load.image("jewelery", iconsRoute + "jewelery.png");
    this.load.image("poultry", iconsRoute + "poultry.png");
    this.load.image("quest", iconsRoute + "quest.png");
    this.load.image("winery", iconsRoute + "winery.png");
    this.load.image("fishery", iconsRoute + "fishery.png");
    this.load.image("battery", iconsRoute + "battery.png");
    this.load.image("reaktor", iconsRoute + "reaktor.png");
    this.load.image("coin", iconsRoute + "coin.png");

    // load mx
    this.load.audio("bgMain", urlBase + "assets/audio/bg/main.ogg");

    // load sfx
    this.load.audio(
      "sfxNotification",
      urlBase + "assets/audio/fx/notification.ogg"
    );
    this.load.audio("sfxInvest", urlBase + "assets/audio/fx/invest.ogg");
    this.load.audio(
      "sfxInvestAvailable",
      urlBase + "assets/audio/fx/investAvailable.ogg"
    );
    this.load.audio(
      "sfxManagerAvailable",
      urlBase + "assets/audio/fx/managerAvailable.ogg"
    );
    this.load.audio("sfxProduce", urlBase + "assets/audio/fx/produce.ogg");
    this.load.audio(
      "sfxMinerProduce",
      urlBase + "assets/audio/fx/minerProduce.ogg"
    );
    this.load.audio(
      "sfxTavernProduce",
      urlBase + "assets/audio/fx/tavernProduce.ogg"
    );
    this.load.audio(
      "sfxForgeProduce",
      urlBase + "assets/audio/fx/forgeProduce.ogg"
    );
    this.load.audio(
      "sfxJeweleryProduce",
      urlBase + "assets/audio/fx/jeweleryProduce.ogg"
    );
    this.load.audio(
      "sfxTradeProduce",
      urlBase + "assets/audio/fx/tradeProduce.ogg"
    );
    this.load.audio(
      "sfxArmyProduce",
      urlBase + "assets/audio/fx/armyProduce.ogg"
    );
    this.load.audio(
      "sfxQuestProduce",
      urlBase + "assets/audio/fx/questProduce.ogg"
    );
    this.load.audio(
      "sfxHireManager",
      urlBase + "assets/audio/fx/hireManager.ogg"
    );
    this.load.audio(
      "sfxUnlockBusiness",
      urlBase + "assets/audio/fx/unlockBusiness.ogg"
    );
    this.load.audio(
      "sfxBusinessUnlocked",
      urlBase + "assets/audio/fx/businessUnlocked.ogg"
    );
    this.load.audio(
      "sfxTutorialAppears",
      urlBase + "assets/audio/fx/tutorialAppears.ogg"
    );
    this.load.audio("sfxHello", urlBase + "assets/audio/fx/dwarfHello.ogg");

    // load json
    this.load.json("translations", urlBase + "assets/texts.json");

    // fake loader
    if (this.constants.FAKE_LOADER_ACTIVE) {
      for (var i = 0; i < 500; i++) {
        this.load.spritesheet(`logo-${i}`, urlBase + "assets/phaserLogo.png", {
          frameWidth: 382,
          frameHeight: 331,
        });
      }
    }
  }
}
