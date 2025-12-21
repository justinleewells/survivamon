import Directions from '@enums/directions'

export default class MovementController {
  constructor(entity) {
    this.entity = entity
    this.speed = 32
    this.current = { x: 0, y: 0 }
    this.target = null
  }
  isMoving() {
    return this.target !== null
  }
  face(direction) {
    this.entity.setFlipX(direction === Directions.LEFT)
    switch (direction) {
      case Directions.UP:
        return this.entity.play('up', true)
      case Directions.RIGHT:
        return this.entity.play('right', true)
      case Directions.DOWN:
        return this.entity.play('down', true)
      case Directions.LEFT:
        return this.entity.play('right', true)
    }
  }
  moveTo(x, y) {
    if (this.target) return
    this.target = { x, y }
    if (this.target.y < this.current.y) this.face(Directions.UP)
    else if (this.target.x > this.current.x) this.face(Directions.RIGHT)
    else if (this.target.y > this.current.y) this.face(Directions.DOWN)
    else if (this.target.x < this.current.x) this.face(Directions.LEFT)
  }
  moveInDirection(direction) {
    switch (direction) {
      case Directions.UP:
        return this.moveTo(this.current.x, this.current.y - 1)
      case Directions.RIGHT:
        return this.moveTo(this.current.x + 1, this.current.y)
      case Directions.DOWN:
        return this.moveTo(this.current.x, this.current.y + 1)
      case Directions.LEFT:
        return this.moveTo(this.current.x - 1, this.current.y)
    }
  }
  _finishMoving() {
    this.current = this.target
    this.entity.x = this.current.x * 16
    this.entity.y = this.current.y * 16
    this.target = null
  }
  update(delta) {
    if (!this.target) return

    const xVel = this.target.x - this.current.x
    if (xVel != 0) {
      this.entity.x += xVel * (delta / 1000) * this.speed
      if (xVel > 0 && this.entity.x >= this.target.x * 16)
        return this._finishMoving()
      else if (xVel < 0 && this.entity.x <= this.target.x * 16)
        return this._finishMoving()
    }

    const yVel = this.target.y - this.current.y
    if (yVel != 0) {
      this.entity.y += yVel * (delta / 1000) * this.speed
      if (yVel > 0 && this.entity.y >= this.target.y * 16)
        return this._finishMoving()
      else if (yVel < 0 && this.entity.y <= this.target.y * 16)
        return this._finishMoving()
    }
  }
}
