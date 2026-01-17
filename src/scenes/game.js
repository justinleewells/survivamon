import Player from '@components/player'

import PlayerIdleImage from '@images/player-idle.png'
import PlayerWalkImage from '@images/player-walk.png'
import PlayerRunImage from '@images/player-run.png'

import ElvenImage from '@images/elven.png'
import ExampleJson from '@tiled/example.json'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }
  preload() {
    this.load.spritesheet('player-idle', PlayerIdleImage, {
      frameWidth: 16,
      frameHeight: 16,
    })
    this.load.spritesheet('player-walk', PlayerWalkImage, {
      frameWidth: 16,
      frameHeight: 16,
    })
    this.load.spritesheet('player-run', PlayerRunImage, {
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
