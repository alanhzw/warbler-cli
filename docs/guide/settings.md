# 配置参考

你可以在你的项目根目录下新建 `warbler.json` 文件，对 `warbler-cli` 进行配置

::: tip
warbler.json 文件只针对当前项目生效，如果需要全局生效的话，请查看 [config 命令](/guide/command/config)

:::

`warbler-cli` 支持以下配置选项

## registry

配置 `npm` 的镜像地址，参数值为 `string` 类型

```shell
{
  "registry": "https://registry.npmmirror.com/"
}
```

## cacheDir

配置 `warbler-cli` 在运行时储存的一些缓存文件，如 `warbler.json`，以及创建项目所用的模板文件等，
参数值为 `string` 类型

```shell
{
  "cacheDir": "C:\Users\warbler\.warbler-cli"
}
```

## packageManager

指定你的包管理工具，用于 `warbler-cli` 在运行时下载第三方库，启动项目等工作，参数值为 `string` 类型

```shell
{
  "packageManager": "npm"
}
```

## isShowUpdate

关闭此选项将不会再对版本更新进行提示，默认开启，不建议关闭，参数值为 `boolean` 类型

```shell
{
  "registry": true
}
```

## templateList

自定义模板列表，`value` 字段表示自定义模板在 `npm` 仓库中的名称，`name` 字段表示出现在 `warbler-cli` 创建工程时待选择模板列表中的名称

```shell
{
  "templateList": [
    { value: 'hzw-cli-dev-template-vue3', name: 'vue3' },
    { value: 'hzw-cli-dev-template-vue-admin', name: 'vue2' }
  ]
}
```
