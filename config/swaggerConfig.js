// @ts-ignore
const { moduleName } = require("./commonConfig.js");
// swagger 配置
const swaggerConfig = {
  url: 'http://xxx/xxx/api/v2/api-docs', //  TODO:修改
  blacklist: [], // 黑名单 例如：['/xxxModule']
  whitelist: [`/${moduleName}`] // 白名单 修改为你开发的页面模块接口前缀名称
};

module.exports = swaggerConfig;