import PlayerController from './controller'
import Entity from '@components/entity'

export default class Player extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'player')
    this.controller = new PlayerController(this)
  }
}
