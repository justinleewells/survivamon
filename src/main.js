import Phaser from 'phaser'

import GameScene from '@scenes/game'

const config = {
  type: Phaser.AUTO,
  width: 240,
  height: 160,
  scene: [GameScene],
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    max: {
      width: 960,
      height: 640,
    },
  },
}

const game = new Phaser.Game(config)
