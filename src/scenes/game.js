import Player from '@components/player'

import PlayerImage from '@images/player.png'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }
  preload() {
    this.load.spritesheet('player', PlayerImage, {
      frameWidth: 16,
      frameHeight: 16,
    })
  }
  create() {
    this.player = new Player(this, 0, 0)
    this.add.existing(this.player)
  }
}
