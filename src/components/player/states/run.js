import {
  createDirectionAnimations,
  removeDirectionAnimations,
} from '@utils/animation'

export default class PlayerRunState {
  constructor(player) {
    this.player = player
  }
  onEnter() {
    createDirectionAnimations(this.player, 'player-run', 8)
    this.player.controller.speed = 64
  }
  onExit() {
    removeDirectionAnimations(this.player)
  }
}
