const defaultAnimation = (sprite, image, key, start, end) => ({
  key,
  frameRate: 1,
  repeat: -1,
  frames: sprite.anims.generateFrameNames(image, { start, end }),
})

export const createDefaultAnimations = (sprite, image) => {
  sprite.anims.create(defaultAnimation(sprite, image, 'down', 0, 1))
  sprite.anims.create(defaultAnimation(sprite, image, 'right', 2, 3))
  sprite.anims.create(defaultAnimation(sprite, image, 'up', 4, 5))
}
