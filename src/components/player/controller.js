import Directions from '@enums/directions'
import MovementController from '@components/movement/controller'

import PlayerIdleState from './states/idle'
import PlayerWalkState from './states/walk'
import PlayerRunState from './states/run'

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

    if (
      this.keys.up.isDown ||
      this.keys.right.isDown ||
      this.keys.down.isDown ||
      this.keys.left.isDown
    ) {
      if (this.keys.sprint.isDown) {
        if (!(this.entity.state instanceof PlayerRunState))
          this.entity.setState(new PlayerRunState(this.entity))
      } else {
        if (!(this.entity.state instanceof PlayerWalkState))
          this.entity.setState(new PlayerWalkState(this.entity))
      }
    }

    if (this.keys.up.isDown) this.moveInDirection(Directions.UP)
    else if (this.keys.right.isDown) this.moveInDirection(Directions.RIGHT)
    else if (this.keys.down.isDown) this.moveInDirection(Directions.DOWN)
    else if (this.keys.left.isDown) this.moveInDirection(Directions.LEFT)
    else if (!(this.entity.state instanceof PlayerIdleState))
      this.entity.setState(new PlayerIdleState(this.entity))
  }
}
