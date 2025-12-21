import { createDefaultAnimations } from '@utils/animation'

export default class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key)
    createDefaultAnimations(this, key)
    this.setOrigin(0, 0).play('down')
  }
  preUpdate(time, delta) {
    super.preUpdate(time, delta)
    this.controller?.update(delta)
  }
}
