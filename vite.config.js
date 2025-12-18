import path from 'path'

export default {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@scenes': path.resolve(__dirname, 'src/scenes'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
}
