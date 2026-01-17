const createAnimation = (sprite, image, key, start, end, frameRate) => ({
  key,
  frameRate,
  repeat: -1,
  frames: sprite.anims.generateFrameNames(image, { start, end }),
})

export const createDirectionAnimations = (sprite, image, frameRate = 4) => {
  sprite.anims.create(createAnimation(sprite, image, 'down', 0, 3, frameRate))
  sprite.anims.create(createAnimation(sprite, image, 'up', 4, 7, frameRate))
  sprite.anims.create(createAnimation(sprite, image, 'right', 8, 11, frameRate))
}

export const removeDirectionAnimations = (sprite) => {
  sprite.anims.remove('down')
  sprite.anims.remove('up')
  sprite.anims.remove('right')
}
