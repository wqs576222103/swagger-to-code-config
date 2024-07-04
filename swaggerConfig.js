// @ts-ignore
const { moduleName } = require("./config");
// swagger 配置
const swaggerConfig = {
  // url: 'http://imc.test.lg.china-yongfeng.com/safetyBase/api/v2/api-docs', // 永锋safetyBase接口 TODO:修改
  url: 'http://safety-test.tzgt.com.cn/safety/api/v2/api-docs', // 天柱safety接口 TODO:修改
  // url: 'http://safety-test.tzgt.com.cn/safetyBase/api/v2/api-docs', // 天柱safetyBase接口 TODO:修改
  blacklist: [], // 黑名单 例如：['/safetyHazardReasonAnalyse']
  whitelist: [`/${moduleName}`] // 白名单 修改为你开发的页面模块接口前缀名称
};

module.exports = swaggerConfig;