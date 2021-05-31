module.exports = {
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8061,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    /* 使用代理 */
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'https://imissu.ke.qq.com/',
        /* 允许跨域 */
        changeOrigin: true,
      },


    },
  }
}