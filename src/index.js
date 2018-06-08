import Phaser, { Game } from 'phaser'
import BootScene from './scenes/BootScene'
import LoadingScene from './scenes/LoadingScene'
import GameScene from './scenes/GameScene'
import './index.css'

window.addEventListener('load', () => {
  const config = {
    type: Phaser.AUTO,
    width: 750,
    height: 1334,
    backgroundColor: '#05424C',
    scene: [
      BootScene,
      LoadingScene,
      GameScene,
    ],
  }

  window.game = new Game(config)

  window.focus()
  bindEvents()
  resize()
})

const bindEvents = () => {
  window.addEventListener('resize', resize, false)
}

const resize = () => {
  const canvas = document.querySelector('canvas')
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const windowRatio = windowWidth / windowHeight
  const gameRatio = window.game.config.width / window.game.config.height

  if (windowRatio < gameRatio) {
    canvas.style.width = `${windowWidth}px`
    canvas.style.height = `${windowWidth / gameRatio}px`
  } else {
    canvas.style.width = `${windowHeight * gameRatio}px`
    canvas.style.height = `${windowHeight}px`
  }
}
