import gs from "../../../config/gameStats";
import utils from "../../../utils/utils";

export default class Manager extends Phaser.GameObjects.Container {
  constructor(params) {
    super(params.scene, params.x, params.y);
    this.anchor = { x: 0, y: 0 };

    this.businessKey = params.businessKey;
    this.hasManager = false;
    this.createButtons(params);
    this.createPortrait(params);
    this.setEnabled(!!params.enabled);
    this.setHasManager(gs.bs[this.businessKey].manager);

    this.arrow = params.scene.add.sprite(40, 100, "arrow");
    this.arrow.setVisible(false);
    this.arrowTween = this.scene.tweens.add({
      targets: this.arrow,
      y: 115,
      ease: "Sine.easeInOut",
      duration: 600,
      yoyo: true,
      loop: -1,
      paused: true,
    });
    this.scene = params.scene;
    this.add(this.arrow);
  }

  createButtons(params) {
    this.hireManagerButton = params.scene.add.image(
      this.anchor.x,
      this.anchor.y,
      "hireButton"
    );
    this.hireManagerButton.setOrigin(0).setInteractive({ useHandCursor: true });
    this.add(this.hireManagerButton);

    this.hireManagerButtonHover = params.scene.add.image(
      this.anchor.x,
      this.anchor.y,
      "hireButtonHover"
    );
    this.hireManagerButtonHover.setOrigin(0).setVisible(false);
    this.add(this.hireManagerButtonHover);

    this.hireManagerButtonPressed = params.scene.add.image(
      this.anchor.x,
      this.anchor.y,
      "hireButtonPressed"
    );
    this.hireManagerButtonPressed.setOrigin(0).setVisible(false);
    this.add(this.hireManagerButtonPressed);

    this.hireManagerButtonDisabled = params.scene.add.image(
      this.anchor.x,
      this.anchor.y,
      "hireButtonDisabled"
    );
    this.hireManagerButtonDisabled.setOrigin(0).setVisible(false);
    this.add(this.hireManagerButtonDisabled);

    this.hireManagerButton.on("pointerdown", (_) => {
      this.hireManagerButtonPressed.visible = true;
      this.emit("hire");
      this.checkArrow();
    });

    this.hireManagerButton.on("pointerup", (_) => {
      this.hireManagerButtonPressed.visible = false;
    });

    this.hireManagerButton.on("pointerover", (_) => {
      this.hireManagerButtonHover.visible = true;
    });

    this.hireManagerButton.on("pointerout", (_) => {
      this.hireManagerButtonHover.visible = false;
      this.hireManagerButtonPressed.visible = false;
    });

    this.hireLabel = params.scene.add.text(
      this.anchor.x + 20,
      this.anchor.y + 45,
      "Hire!",
      {
        fontFamily: "CalvertMT-Bold",
        fontSize: "16px",
        align: "center",
        color: "#fff",
      }
    );
    this.hireLabel.setStroke("#000", 4);
    this.add(this.hireLabel);

    let hireCost = utils.parseGold(params.managerCost * 0.01);
    this.hireCostLabel = params.scene.add.text(
      this.anchor.x + 40,
      this.anchor.y + 80,
      `${hireCost.value} ${hireCost.units}`,
      {
        fontFamily: "CalvertMT-Bold",
        fontSize: "14px",
        align: "center",
        color: "#fff",
      }
    );
    this.hireCostLabel.setStroke("#000", 4).setOrigin(0.5, 0);
    this.add(this.hireCostLabel);
  }

  createPortrait(params) {
    this.managerBg = params.scene.add.image(
      this.anchor.x,
      this.anchor.y,
      "managerBG"
    );
    this.managerBg
      .setOrigin(0)
      .setInteractive({ useHandCursor: true })
      .setVisible(this.hasManager);
    this.add(this.managerBg);

    this.managerSprite = params.scene.add.sprite(
      this.managerBg.width / 2,
      this.managerBg.height / 2 - 4,
      params.managerKey,
      params.managerIndex
    );
    this.managerSprite.setVisible(this.hasManager);
    this.add(this.managerSprite);
  }

  setEnabled(enabled) {
    if (this.enabled == enabled) return false;
    this.enabled = enabled;
    this.hireManagerButton.visible = this.enabled;
    this.hireManagerButtonDisabled.visible = !this.enabled;
    this.hireLabel.visible = this.enabled;
    return enabled;
  }

  setHasManager(hasManager) {
    this.hasManager = hasManager;
    this.managerBg.visible = this.hasManager;
    this.managerSprite.visible = this.hasManager;
    this.hireManagerButton.visible = !this.hasManager;
    if (hasManager) {
      this.hireManagerButton.visible = false;
      this.hireManagerButtonHover.visible = false;
      this.hireManagerButtonPressed.visible = false;
      this.hireLabel.visible = false;
      this.hireCostLabel.visible = false;
    }
  }

  displayArrow() {
    this.arrow.setVisible(true);
    this.arrowTween.play();
  }

  checkArrow() {
    if (!this.arrow.visible) return;
    this.arrow.setVisible(false);
    this.arrowTween.stop();
    gs.set("tutorial.open", false);
  }
}
