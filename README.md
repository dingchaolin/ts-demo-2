## 安装typescript
- npm install -g typescript

## 客户端工具
- tsc --version

## 生成tsc编译配置文件
- tsc --init
- 生成tscinfig.json
- 使用tsc命令编译ts文件的时候会根据该文件进行编译

#### 配置信息
- ```
{
    "compilerOptions": {
        "module": "system",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "outFile": "../../built/local/tsc.js",
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}```

- module 为commonjs的时候 不支持outFile
- noImplicitAny 在表达式和声明上有隐含的any类型时报错
- exclude 不编译的文件夹
- outFile 输出的js的路径