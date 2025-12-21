import path from 'path'

export default {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@enums': path.resolve(__dirname, 'src/enums'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@scenes': path.resolve(__dirname, 'src/scenes'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@tiled': path.resolve(__dirname, 'tiled'),
    },
  },
}
