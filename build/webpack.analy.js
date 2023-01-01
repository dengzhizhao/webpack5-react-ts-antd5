const prodConfig = require('./webpack.prod')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin') // 引入webpack打包速度分析插件

const smp = new SpeedMeasurePlugin()
const {merge} = require('webpack-merge')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 引入分析打包结果插件

// 使用smp.wrap方法,把生产环境配置传进去
module.exports = smp.wrap(merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin() // 配置分析打包结果插件
  ]
}))