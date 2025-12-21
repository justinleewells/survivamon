import Player from '@components/player'

import PlayerImage from '@images/player.png'
import ElvenImage from '@images/elven.png'
import ExampleJson from '@tiled/example.json'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }
  preload() {
    this.load.spritesheet('player', PlayerImage, {
      frameWidth: 16,
      frameHeight: 16,
    })
    this.load.image('elven', ElvenImage)
    this.load.tilemapTiledJSON('map', ExampleJson)
  }
  create() {
    const map = this.make.tilemap({ key: 'map' })

    const tiles = map.addTilesetImage('elven')
    const ground = map.createLayer(0, tiles, 0, 16)
    const mask = map.createLayer(1, tiles, 0, 16)
    const objects = map.createLayer(2, tiles, 0, 16)

    this.player = new Player(this, 0, 16)
    this.add.existing(this.player)
  }
}
