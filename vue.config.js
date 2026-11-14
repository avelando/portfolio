const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',

  transpileDependencies: true,

  chainWebpack: (config) => {
    config.module
      .rule('videos')
      .test(/\.(mp4|webm|ogg|mov)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'media/[name].[hash:8].[ext]',
      })
  },
})
