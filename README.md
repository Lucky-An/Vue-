### 项目启动命令改为了npm run dev

###  配置jsconfig.json

```json
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": ["src/*"]
        }
    },
    "exclude": ["node_modules", "dist"]
}
```

####  配置vue.config.js   相关配置教程在vue-cli

```javascript
module.exports = {
    lintOnSave: false, //直接关闭eslint检查
    devServer: {
        proxy: {
            '/api': { //! 之处理/api 开头的请求
                target: 'http://182.92.128.115', //! 转发目标地址
                changeOrigin: true //! 支持跨域
            }
            //     ,
            //   '/foo': {
            //     target: '<other_url>'
            //   }
        }
    }
}
```



###  新建pages文件夹存放路由组件，尽量每个.vue文件都提供name，并且name和路由name一致。

### 配置vue-router，路由配置了跳转路由回到页面顶部，新的路由对象存放到route.js。

### 配置vuex，新建store文件夹存放与vuex有关的文件。

###  新建axios文件夹

