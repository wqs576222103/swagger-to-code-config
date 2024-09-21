/** <%=moduleCName%>页面路由配置 */
export default [<% var pages=pageConfig.template.route.pages %>
    // 列表页面
    {
      path: '/<%=pages.index.path%>',
      name: '<%=pages.index.name%>',
      component: () => import('@/views/<%=pageConfig.lowerModuleName%>/<%=pages.index.filePath%>'),
      meta: { sidebar: true }
    },
    <%_ if(swaggerData.detail) {_%>
    // 详情页面
    {
      path: '/<%=pages.detail.path%>',
      name: '<%=pages.detail.name%>',
      component: () => import('@/views/<%=pageConfig.lowerModuleName%>/<%=pages.detail.filePath%>'),
      meta: { sidebar: true }
    },
    <%}%>
  ];
