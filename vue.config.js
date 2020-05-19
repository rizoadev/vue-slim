const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  css: {
    extract: false
    //extract: {
    //  filename: `css/[name].css`,
    //  chunkFilename: `css/[name].css`
    //}
  },
  configureWebpack: {
    output: {
      filename: 'agen.js'
    },
    optimization: {
      // minimize: false,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    //config.output.chunkFilename(`js/[id].js`);
    config.optimization.delete('splitChunks')
    config.optimization.splitChunks(false)
    config.plugins.delete('pwa')
    config.plugins.delete('workbox')
  }
}
