import path from 'path'

export default {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@scenes': path.resolve(__dirname, 'src/scenes'),
    },
  },
}
