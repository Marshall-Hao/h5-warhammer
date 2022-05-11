const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  productionSourceMap: !isProduction,
  css: {
    sourceMap: !isProduction,
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },

  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  },
  // * https://blog.csdn.net/Liu_yunzhao/article/details/90520028
  // devServer: {
  //   // * 翻墙导致的跨域代理不生效
  //   proxy: {
  //     "^/api/v1": {
  //       target: "https://api-staging.h5.games-workshop-china.com",
  //       secure: true,
  //       ws: true, //代理websocked
  //       changeOrigin: true, //虚拟的站点需要更管origin
  //     },
  //   },
  //   //  proxy: "http://localhost:8080",
  // },

  // chainWebpack: (config) => {
  //   // gltf Loader
  //   config.module
  //     .rule("gltf")
  //     .test(/\.(glb|gltf|fbx)$/i)
  //     .use("file-loader")
  //     .loader("file-loader")
  //     .end();
  // },
};
