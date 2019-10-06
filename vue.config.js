/* const CompressionWebpackPlugin = require("compression-webpack-plugin");
var config = require("./webpackConfig"); */

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_main.scss";`
      }
    }
  }
  /* pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js" // 'vue/dist/vue.common.js' for webpack 1
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp(
          "\\.(" + config.build.productionGzipExtensions.join("|") + ")$"
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  } */
  //publicPath: process.env.NODE_ENV === "production" ? "/portfolio" : "/"
};
