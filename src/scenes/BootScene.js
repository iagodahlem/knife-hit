import { Scene } from 'phaser'

class BootScene extends Scene {
  constructor() {
    super('boot')
  }

  preload() {
    this.load.json('assets', './assets/assets.json')
    this.load.image('logo', './assets/logo.png')
  }

  create() {
    this.scene.start('preload')
  }
}

export default BootScene
