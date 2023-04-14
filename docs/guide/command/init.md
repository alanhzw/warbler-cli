# 创建一个项目

## init

运行以下命令来创建一个新项目：

```shell
warbler init [options]
```

首先你会被提示输入项目名称

```shell
❯ warbler init
? 请输入项目名称
```

然后，你会被提示选取一个模板：

```shell
❯ warbler init
? 请输入项目名称 my-project
? 请选择项目模板 (Use arrow keys)
> vue3
  vue2
```

当然，模板可能不止上述的几个，你也可以选择 添加自定义模板

选择完模板以后等待安装完成即可，如果携带了 `--install`，`--serve` 参数，你还需要等待脚手架为你安装依赖，启动服务

## options

运行以下命令来查看支持的参数：

```shell
warbler init -h
```

你会得到以下的结果：

```shell
Usage: warbler init [options]

通过选择模板, 你可以快速的初始化一个项目

Options:
  -pn, --project-name <projectName>  指定项目名称
  -i, --install  是否在创建完成后自动安装依赖 (default: false)
  -s, --serve    是否在安装依赖后自动启动服务 (default: false)
  -h, --help     查看帮助文档
```

### --project-name

::: warning
该参数要求以英文字母开头,数字或字母结尾,字符只允许使用 - 以及 \_，不符合规范将终止程序的运行
:::

```shell
# 你可以这样使用该参数
warbler init  --project-name <projectName>
# 也可以使用它的简写模式
warbler init -pn <projectName>
```

### --install

是否在创建完成后自动安装依赖，使用该参数，在模板完成安装后会自动执行 `npm install` 来安装项目所需要的依赖

```shell
# 你可以这样使用该参数
warbler init --install
# 也可以使用它的简写模式
warbler init -i
```

### --serve

是否在安装依赖后自动启动服务，使用该参数，在依赖完成安装后，会自动执行 `npm run serve` 来启动项目

::: warning
使用该参数要满足两个前置条件，否则会抛出错误：

- 需要携带 --install 参数
- 项目的启动命令必须是 serve
  :::

```shell
# 你可以这样使用该参数
warbler init --install --serve
# 也可以使用它的简写模式
warbler init -i -s
```

### --help

查看 `init` 命令的帮助文档，正如你上面看到的那样

```shell
# 你可以这样使用该参数
warbler init --help
# 也可以使用它的简写模式
warbler init -h
```
