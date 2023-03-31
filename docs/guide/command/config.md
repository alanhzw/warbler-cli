# 配置你的脚手架

## config

运行以下命令来查看 `warbler-cli` 支持的配置选项：

```shell
warbler config -h
```

你会得到以下的结果：

```shell
Usage: warbler config [options]

对脚手架进行配置, 也可以查看您的配置文件

Options:
  -s, --show                                    查看脚手架的配置
  -i, --info                                    查看脚手架的信息
  -sr, --set-registry <registry>                指定 npm 源地址
  -scd, --set-cache-dir <cacheDir>              指定缓存目录地址
  -spm, --set-package-manager <packageManager>  指定包管理工具
  -ssu, --set-show-update <isShowUpdate>        是否提示版本更新（boolean,默认true）
  -h, --help                                    查看帮助文档
```

运行以下命令来配置你的脚手架：

```shell
warbler config [options]
```

::: tip
通过 config 命令进行的配置，会对全局生效，如果需要只针对当前项目生效，请查看 [配置参考](/guide/settings)
:::

## options

### --show

以 `JSON` 的形式展示 `warbler-cli` 的配置，默认展示全局的配置内容，如果你的项目根目录下有一个 `warbler.json` 文件的话，展示二者合并后的配置

```shell
# 你可以这样使用该参数
warbler config --show
# 也可以使用它的简写模式
warbler config -s
```

### --info

以文字的形式展示 `warbler-cli` 的相关信息

```shell
# 你可以这样使用该参数
warbler config --info
# 也可以使用它的简写模式
warbler config -i
```

### --set-registry

参数值为 `string` 类型

配置 `npm` 的镜像地址，默认是 `npm` 的官方镜像 `https://registry.npmjs.org/`

```shell
# 你可以这样使用该参数
warbler config --set-registry <registry>
# 也可以使用它的简写模式
warbler config -sr <registry>
```

### --set-cache-dir

参数值为 `string` 类型

配置 `warbler-cli` 在运行时储存的一些缓存文件，如 `warbler.json`，以及创建项目所用的模板文件等

```shell
# 你可以这样使用该参数
warbler config --set-cache-dir <cacheDir>
# 也可以使用它的简写模式
warbler config -scd <cacheDir>
```

### --set-package-manager

参数值为 `string` 类型

指定你的包管理工具，用于 `warbler-cli` 在运行时下载第三方库，启动项目等工作，默认为 `npm`

```shell
# 你可以这样使用该参数
warbler config --set-package-manager <packageManager>
# 也可以使用它的简写模式
warbler config -spm <packageManager>
```

### --set-show-update

参数值为 `boolean` 类型

关闭此选项将不会再对版本更新进行提示，默认开启，不建议关闭

```shell
# 你可以这样使用该参数
warbler config --set-show-update <isShowUpdate>
# 也可以使用它的简写模式
warbler config -ssu <isShowUpdate>
```
