// @ts-ignore
const commonConfig = require("./commonConfig.js");
// @ts-ignore
const { getCustomRequestName } = require("../utils/index.js");
// @ts-ignore
const { moduleName } = commonConfig;

// 规范已经匹配的请求名称
// @ts-ignore
const formatRequestName = (config) => {
  const { swaggerData } = config;
  const typeMap = {};
  config.swaggerData = swaggerData.map((v) => {
    let requestName = v.requestName;
    if (v.requestType && !typeMap[v.requestType]) {
      typeMap[v.requestType] = true;
      requestName = getCustomRequestName(moduleName, v.requestType);
    }
    return {
      ...v,
      requestName,
    };
  });
};

const requestConfig = {
  ...commonConfig,
  /** 模板目录相关文件路径配置 以swagger-to-code文件为相对路径, 其它文件一律以命令执行路径cwd为相对路径 */
  templatePath: "./template/request.js",
  // 默认api输出文件目录, 命令执行路径cwd为相对路径 TODO:修改
  outputPath: "./src/api/modules",
  // 输出文件名 fileName 默认和页面的模块名相同
  moduleName,
  // 传query时可能要传body、formData所以要区分开
  // query请求数据键名 TODO:修改
  queryName: "data",
  // body请求数据键名 TODO:修改
  bodyName: "body",
  // formData请求数据键名 TODO:修改
  formDataName: "body",
  // 对数据进行格式转换，可以在这里将数据转换为自己想要的
  formatConfig: (config) => {
    // 比如规范请求名称
    formatRequestName(config);
    // console.log(JSON.stringify(config));
    return config;
  },
  // 成功的回调
  onSuccess: (config) => {
    // 可以在这处理一些后继的事情
    // console.log(config)
  },
};



module.exports = requestConfig;