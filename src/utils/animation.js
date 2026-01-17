const defaultAnimation = (sprite, image, key, start, end) => ({
  key,
  frameRate: 4,
  repeat: -1,
  frames: sprite.anims.generateFrameNames(image, { start, end }),
})

export const createDefaultAnimations = (sprite, image) => {
  sprite.anims.create(defaultAnimation(sprite, image, 'down', 0, 3))
  sprite.anims.create(defaultAnimation(sprite, image, 'up', 4, 7))
  sprite.anims.create(defaultAnimation(sprite, image, 'right', 8, 11))
}
