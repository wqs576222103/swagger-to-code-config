// 将第一个字母大写
const upperFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1);
// 将第一个字母小写
const lowerFirstChar = (str) => str.charAt(0).toLowerCase() + str.slice(1);

// 针对不同类型接口，自定义请求方法名
const getCustomRequestName = (moduleName, requestType) => {
  // add delete import export
  requestName = `${requestType}${upperFirstChar(moduleName)}`;
  if (requestType === "detail" || requestType === "list") {
    requestName = `get${upperFirstChar(moduleName)}${upperFirstChar(
      requestType
    )}`;
  }
  if (requestType === "edit") {
    requestName = `put${upperFirstChar(moduleName)}`;
  }
  return requestName;
};

module.exports = {
  upperFirstChar,
  lowerFirstChar,
  getCustomRequestName,
};
