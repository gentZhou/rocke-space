
const px2rem = require("postcss-px2rem")
module.exports = {
    productionSourceMap: false,
    lintOnSave: false,
    
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    px2rem({ remUnit: 19.2 })//1rem等于多少px
                ]
            }
        }
    },
    devServer: {
      open:true,
        // proxy: "http://segmenth50422.utools.club",
        proxy: {
        //   "/api": {
        //     // target: "http://flash.weather.com.cn/wmaps/xml/shenzhen.xml",
        //     target:"localhost:9527",
        //     ws: true,
        //     changeOrigin: true,
        //     pathRewrite: {
        //       "^/api": ""
        //     }
        //   }
          '/api': {
            target: 'http://localhost:9527',
            pathRewrite: { '^/api': '' },
          },
        }
      }
    

}
