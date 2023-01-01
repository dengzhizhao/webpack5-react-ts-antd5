const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development' // 是否是开发模式

module.exports = {
  // 入口文件
  entry: path.join(__dirname, "../src/index.tsx"),

  // 出口
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    path: path.join(__dirname, '../dist'),
    clean: true,  // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },

  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: ['thread-loader', 'babel-loader'],
        include: [path.resolve(__dirname, '../src')], 
      },
      {
        test: /.css$/,  //匹配所有的 css 文件
        // include: [path.resolve(__dirname, '../src')], 
        use: [
          // 开发环境使用style-looader,打包模式抽离css
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', 
          'postcss-loader'
        ]
      },
      {
        test: /.less$/,   //匹配所有的 less 文件
        use: [
          // 开发环境使用style-looader,打包模式抽离css
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,  // 匹配以这些结尾的图片文件
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename:'static/img/[name][ext]'  // 文件输出目录和命名
        }
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/,  // 匹配字体图标文件
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename:'static/fonts/[name][ext]'  // 文件输出目录和命名
        }
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename:'static/media/[name][ext]'  // 文件输出目录和命名
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    // 查找第三方模块只在本项目的node_modules中查找
    modules: [path.resolve(__dirname, '../node_modules')], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true,  // 自动注入静态资源
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
    })
  ],
  // 开启webpack持久化存储缓存
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
}