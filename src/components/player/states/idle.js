import {
  createDirectionAnimations,
  removeDirectionAnimations,
} from '@utils/animation'

export default class PlayerIdleState {
  constructor(player) {
    this.player = player
  }
  onEnter() {
    createDirectionAnimations(this.player, 'player-idle', 2)
    this.player.controller.face(this.player.controller.direction)
  }
  onExit() {
    removeDirectionAnimations(this.player)
  }
}
