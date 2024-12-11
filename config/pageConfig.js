// @ts-ignore
const commonConfig = require("./commonConfig.js");
// @ts-ignore
const { upperFirstChar, getCustomRequestName } = require("../utils/index.js");
// @ts-ignore
const { moduleName, lowerModuleName } = commonConfig;

// 规范已经匹配的请求名称
// @ts-ignore
const formatRequestName = (config) => {
  const { swaggerData } = config;
  const typeMap = {};
  Object.keys(swaggerData).forEach((k) => {
    const v = swaggerData[k];
    if (v.requestType && !typeMap[v.requestType]) {
      v.requestName = getCustomRequestName(lowerModuleName, v.requestType);
    }
  });
};

// 将列表请求的query参数去除
const removeListQuery = (config) => {
  const reqParams = config.swaggerData.list.reqParams;
  config.swaggerData.list.reqParams = reqParams.map((v) => {
    if (v.key.startsWith("query.")) {
      v.key = v.key.replace("query.", "");
    }
    return v;
  });
};

const pageConfig = {
  ...commonConfig,
  // 页面模块名称
  moduleName,
  /**
   * 模板目录相关文件路径配置 以swagger-to-code文件为相对路径, 其它文件一律以命令执行路径cwd为相对路径
   */
  template: {
    route: {
      pages: {
        // 首页 TODO:修改
        index: {
          path: lowerModuleName,
          name: upperFirstChar(moduleName),
          filePath: "index.vue",
        },
        // 详情页 TODO:修改
        detail: {
          path: `${lowerModuleName}Detail`,
          name: `${upperFirstChar(moduleName)}Detail`,
          filePath: "detail.vue",
        },
      },
      // route模块的模板位置, 相对路径./swagger-to-code
      modulePath: "./template/route.ts",
      // 默认route模块输出文件目录，相对路径为命令执行路径cwd TODO:修改
      outputPath: "./src/router/modules",
      // 页面路由入口文件位置, 相对路径为命令执行路径cwd TODO:修改
      indexPath: "./src/router/index.ts",
      // 页面路由入口，在找不到页面路由入口文件时，默认从模板中去找，相对路径./swagger-to-code
      indexDefaultPath: "./template/routeIndex.ts",
      // 约定引入、和使用位置需要添加注释 // swagger-to-code import-route TODO:修改
      indexImportRoute: `import ${lowerModuleName} from './modules/${lowerModuleName}';`,
      // 约定引入、和使用位置需要添加注释 // swagger-to-code use-route TODO:修改
      indexUseRoute: `...${lowerModuleName},`,
      // 页面路由默认输出文件目录，修改为自己的路由文件存放路径
    },
    page: {
      // 页面模板文件路径, 相对路径./swagger-to-code
      rootPath: "./template/page", // 还可以定义如 ./template/chartPage
      // 默认输出文件目录，相对路径为命令执行路径cwd TODO:修改
      outputPath: "./src/views",
    },
  },
  // 对数据进行格式转换，可以在这里将数据转换为自己想要的
  formatConfig: (config) => {
    formatRequestName(config);
    // 将列表请求的query参数去除
    removeListQuery(config);
    // console.log(JSON.stringify(config.swaggerData));
    return config;
  },
  // 成功的回调
  onSuccess: (config) => {
    // 可以在这处理一些后继的事情
    // console.log(config)
  },
};

module.exports = pageConfig;
