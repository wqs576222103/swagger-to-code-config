# swagger-to-code的配置及模板仓库

## 将对应分支的模板配置pull到你的项目指定目录下，再结合swagger-to-code生成代码

## 目前支持的模板配置

```sh
|-- swagger-to-code-config # 模板配置根目录
    |-- template # 相关ejs模板文件
        |-- page # 在这里添加你页面的模板文件
            | -- index.html # 模板样例
        |-- route.ts # 生成模块路由模板
        `-- request.js # 生成请求方法的模板
    |-- config,js # 生成请求和页面的公共配置
    |-- pageConfig.js # 生成页面的配置
    |-- requestConfig.js # 生成请求的配置
    |- swaggerConfig.js # 请求swagger的配置
    `-- utils.js # 工具方法
    
```

## FQA

1. Q: 如何新增自己的模板配置

   A: 1.从master新建分支 git checkout -b <branch_name>

      2.在你的项目中模板目录下使用 git clone -b <branch_name> <repository_url>，拉取指定分支模板内容。再删除模板目录下的.git文件

      3.将文件模板对应分支clone到你的项目中进行调试修改

        3.1 修改配置文件config.js、pageConfig.js、requestConfig.js、swaggerConfig.js。如果不清楚修改哪些，可搜索 “TODO:修改”关键字定位到需要修改的地方

        3.2 修改配置文件所关联路径的路由模板如route.ts、请求模板request.js。

        3.3 将想要生成的页面，拷贝到配置文件关联的模板template/page目录下,删除template/page/index.html。将拷贝的代码文件修改为ejs模板。

      

