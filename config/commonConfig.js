const { lowerFirstChar, upperFirstChar } = require('../utils/index.js')
// 判断是否是新增接口，TODO:修改
const isAddRequest = (config) => /(?<!批量)(新增|新建|保存|增加)(?!导出|导入)/g.test(config.summary);
// 判断是否是删除接口，TODO:修改
const isDeleteRequest = (config) => /删除/g.test(config.summary);
// 判断是否是列表查询接口，TODO:修改
const isListRequest = (config) => /列表查询|分页查询/g.test(config.summary);
// 判断是否是详情接口，TODO:修改
const isDetailRequest = (config) =>
  /详情|回显/g.test(config.summary) || config.url.includes("/getDetail");
// 判断是否是编辑接口，TODO:修改
const isEditRequest = (config) => /更新|编辑|修改/g.test(config.summary);
// 判断是否是导入模板下载接口，TODO:修改
const isImportTemplateRequest = (config) => /模(板|版)?(下载|下載)/g.test(config.summary) || /(下载|下載|结果录入)?模(板|版)/g.test(config.summary);
// 判断是否是导入接口，TODO:修改
const isImportRequest = (config) => /导入|结果录入|Excel批量新增/g.test(config.summary);
// 判断是否是导出接口，TODO:修改
const isExportRequest = (config) => /(?<!模板)(导出|下载)(?!模板)/g.test(config.summary);
// 用于请求及生成页面的默认公共模块名称 TODO:修改
//"safetyDetector", 时间selectSafetyTrainModel，导入导出safetyHazardInspectionStandard SafetyOccupationHealthDetectPlan
const moduleName = 'operatingProcedures' //"SafetyOccupationHealthDetectPoint", //"safetyHazardInspectionStandard"
const config = {
  moduleName,
  lowerModuleName: lowerFirstChar(moduleName),
  upperModuleName: upperFirstChar(moduleName),
  // 根据此配置，去处理swagger接口类型。并将处理的数据，返回到模板数据中
  // 比如如你配置了一个add，那么ejs模板数据swaggerData.add就会有值
  apiConfigs: {
    add: {
      // 新增接口
      test: isAddRequest,
    },
    delete: {
      // 删除接口
      test: isDeleteRequest,
    },
    list: {
      // 列表查询接口
      test: isListRequest,
      // 接口类型，可选
      type: "pageList",
      // 格式化请求参数
      // formatReqParams: (params) => params,
      // 格式化返回参数
      // formatResParams: (params) => params,
    },
    detail: {
      // 详情接口
      test: isDetailRequest,
    },
    edit: {
      // 编辑接口
      test: isEditRequest,
    },
    // 这个配置最好放在import上方，否则可能匹配不到
    importTemplate: {
      // 导入模板文件下载接口
      test: isImportTemplateRequest,
    },
    import: {
      // 导入接口
      test: isImportRequest,
    },
    export: {
      // 导出接口
      test: isExportRequest,
    },
  },
};

module.exports = config;
