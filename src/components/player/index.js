import PlayerController from './controller'
import Entity from '@components/entity'

import PlayerIdleState from './states/idle'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player-idle')
    this.controller = new PlayerController(this)
    this.setState(new PlayerIdleState(this))
    this.setOrigin(0, 0).play('down')
  }
  setState(state) {
    this.state?.onExit?.()
    state?.onEnter?.()
    this.state = state
  }
  preUpdate(time, delta) {
    super.preUpdate(time, delta)
    this.controller?.update(delta)
  }
}
