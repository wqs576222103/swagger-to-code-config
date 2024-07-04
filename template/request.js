/** <%=moduleCName%> */
import { HttpMethod } from '../base';
import http from '../http';<% if(swaggerData.filter(requestConfig.apiConfigs.export.test)?.length > 0){%>
import fileHttp, { downloadBlob } from '../fileHttp';<%}%>

<% for(var i = 0; i < swaggerData.length; i++) { const config = swaggerData[i] %>
/** <%= moduleCName %> - <%= config.summary %> */
export async function <%=config.requestName%>(<%=config.reqParams%>) {
    const url = '<%=config.url%>';<% if(config.requestType == 'export'){%>
    const res = await fileHttp.<%=config.method.toLocaleLowerCase()%>(url, <%=config.reqBody.replace('data', 'params')%>);
    downloadBlob(res);<%} else {%>
    return http.request({ url, method: HttpMethod.<%=config.method%><% if(config.reqBody){%>, <%=config.reqBody%><%}%> });<% } %>
};
<% } %>