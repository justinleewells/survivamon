import { createDefaultAnimations } from '@utils/animation'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player')
    createDefaultAnimations(this, 'player')
    this.setOrigin(0, 0).play('down')
  }
}
