/** <%=moduleCName%> */
import { HttpMethod } from '../base';
import http from '../http';
<%_ if(swaggerData.filter(requestConfig.apiConfigs.export.test)?.length > 0){_%>
import fileHttp, { downloadBlob } from '../fileHttp';
<%_}_%>

<% for(var i = 0; i < swaggerData.length; i++) { const config = swaggerData[i] %>
/** <%= moduleCName %> - <%= config.summary %> */
export async function <%=config.requestName%>(<%=config.reqParams%>) {
    const url = '<%=config.url%>';
<%_ if(config.requestType == 'export'){_%>
    const res = await fileHttp.<%=config.method.toLocaleLowerCase()%>(url, <%=config.reqBody.replace('data', 'params')%>);
    downloadBlob(res);
<%_} else {_%>
    return http.request({ url, method: HttpMethod.<%=config.method%><% if(config.reqBody){%>, <%=config.reqBody%><%}%> });
<%_ } _%>
};
<%_ } _%>