module.exports = {
    devServer: {
      open: true,
      // host: 'localhost',
      host: '0.0.0.0',
      port: 8080,
      https: false,
    //   hotOnly: false,
      hot: false,

      // 设置跨域
      proxy: {
        '/api': {
          target: 'http://imissu.herokuapp.com',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      },
    //    before: (app) => {}
        setupMiddlewares: (middlewares, devServer) => {
            // 在这里添加你的中间件逻辑
            return middlewares;
          }

    }
  }
  
  