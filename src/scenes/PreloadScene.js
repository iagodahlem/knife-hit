import { Scene } from 'phaser'

class PreloadScene extends Scene {
  constructor() {
    super('preload')
  }

  preload() {
    this.loadAssets(this.cache.json.get('assets'))
    this.add.image(this.centerX(), this.centerY(), 'logo')
    this.createProgressbar(this.centerX(), this.centerY() + 240)
  }

  loadAssets(json) {
    Object.keys(json).forEach((key) => {
      this.load.image(key, `./assets/${json[key]}`)
    })
  }

  centerX() {
    return this.sys.game.config.width / 2
  }

  centerY() {
    return this.sys.game.config.height / 2
  }

  createProgressbar(x, y) {
    const width = 400
    const height = 16
    const xStart = x - width / 2
    const yStart = y - height / 2

    const progressbar = this.add.graphics()

    const updateProgressbar = (percentage) => {
      progressbar.clear()
      progressbar.fillStyle(0xffffff, 1)
      progressbar.fillRect(xStart, yStart, percentage * width, height)
    }

    this.load.on('progress', updateProgressbar)
    this.load.once('complete', () => {
      this.load.off('progress', updateProgressbar)
      this.scene.start('game')
    })
  }
}

export default PreloadScene
