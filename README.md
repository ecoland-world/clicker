# Ecoland - Future Farm

**Future Farm** is an HTML5 game based on [Adventure Capitalist](https://en.wikipedia.org/wiki/AdVenture_Capitalist)., created with [Phaser3 - Webpack template](https://github.com/phaserjs/template-webpack).
The game was designed mobile first and you can play it now on:

## Development

### Installation

Just run: `$ npm install`

### Run Game

`$ npm run start` the game will be automatically launched on `localhost:8080`. Start script uses livereload.

### Build

To build the game run `$ npm run build` it generates a `dist` folder with: `bundle.min.js`, `index.html` and all the assets on `assets` folder.

If you store the assets in a different static server provider beware to set the awsPrefix=`url` on `src/scenes/ui/boot.js` and `src/scenes/ui/preboot.js` files. (check the [deploy](https://github.com/ecoland-world/clicker/tree/deploy) branch to see an example)

### Deploy

Dist folder can be compressed and upload to any site that support HTML5 games like itch.io or gamejolt.

### Deploy on AWS S3

All assets are stored on S3, to sync your files run `$ aws s3 cp dist/ s3://bucket-url/ --grants read=uri=http://acs.amazonaws.com/groups/global/`
An online version is available on:

### Database

Games played by users could be listed on:

## Project structure

The game uses 4 scenes:

* `src/scenes/ui/boot.js` to load all the assets required for the game
* `src/scenes/ui/preboot.js` only loads the logo and background images in order to provide a better loading screen
* `src/scenes/game/HUDgame.js` displays notifications and avatar related data.
* `src/scenes/game/game.js` is the main scene, contains a dictionary of `Business`, sound bg and fxs, particle emitters.

### Time management for idle component

Time update is not handled by phaser as the update process does not work properly when the tab is not visible, to keep the expected idle behaviour for the game a setTimeout approach was made. This is only used for logic calculations.

* `src/managers/timeManager.js` is a singleton that handles a continous loop that notifies every subscriber when a tick has completed sending the delta time to do the proper calculation.

```javascript
  loop() {
    if (!this.running) return
    const now = +Date.now()
    const delta = now - this.lastTime
    this.subscribers.forEach( subscriber => {
      subscriber.updateIdle(delta)
    })
    this.lastTime = now
    setTimeout( _ => this.loop(), RefreshRatio)
  }
```
