const isDEV = process.env.NODE_ENV === 'development' // 是否是开发模式
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      },
    ],
    // 预设执行顺序由右往左,所以先处理ts,再处理jsx
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  "plugins": [
    isDEV && require.resolve('react-refresh/babel'),
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ].filter(Boolean)
}