import {
  createDirectionAnimations,
  removeDirectionAnimations,
} from '@utils/animation'

export default class PlayerWalkState {
  constructor(player) {
    this.player = player
  }
  onEnter() {
    createDirectionAnimations(this.player, 'player-walk', 4)
    this.player.controller.speed = 32
  }
  onExit() {
    removeDirectionAnimations(this.player)
  }
}
