import MovementController from '@components/movement/controller'
import Directions from '@enums/directions'

export default class PlayerController extends MovementController {
  constructor(entity) {
    super(entity)

    this.keys = entity.scene.input.keyboard.addKeys({
      up: 'W',
      down: 'S',
      left: 'A',
      right: 'D',
      sprint: 'SPACE',
    })
  }
  update(delta) {
    super.update(delta)

    if (this.isMoving()) return

    if (this.keys.up.isDown) this.moveInDirection(Directions.UP)
    else if (this.keys.right.isDown) this.moveInDirection(Directions.RIGHT)
    else if (this.keys.down.isDown) this.moveInDirection(Directions.DOWN)
    else if (this.keys.left.isDown) this.moveInDirection(Directions.LEFT)
  }
}
