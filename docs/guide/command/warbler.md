# 查看如何使用

## warbler

你可以直接运行 `warbler` 来查看如何使用 `warbler-cli`，也可以携带 `-h` 或者 `--help` 参数：

```shell
warbler
# or
warbler -h
# or
warbler --help
```

你会得到以下的结果：

```shell
Usage: warbler <command> [options]

CLI of WarblerFE, Welcome to the homepage of warbler! 👉http://warbler.duwanyu.com

Options:
  -V, --version     查看脚手架版本
  -D, --debug       是否开启调试模式, 可查看调试信息 (default: false)
  --ignore-warning  是否忽略提示信息, 开启后同样会忽略调试信息 (default: false)
  -h, --help        查看帮助文档

Commands:
  init [options]    初始化项目
  config [options]  脚手架配置

  运行 warbler <command> --help 来查看某个具体命令的帮助文档
```

如果你 `warbler-cli` 的版本低于当前的最新版本，那么你还会收到以下的提示，
此时你可以选择根据提示的命令进行版本的更新

```shell
warbler 💛友情提示 请更新版本: 当前版本: m.m.m, 最新版本: n.n.n
warbler 💛友情提示 更新命令: npm install -g @warbler-fe/cli
```

## options

### --version

携带该参数，你会得到当前脚手架的版本

```shell
# 你可以这样使用该参数
warbler --version
# 也可以使用它的简写模式
warbler -V
```

### --debug

是否开启调试模式， 携带该参数，你可以查看脚手架运行过程中输出的调试信息，默认关闭状态

```shell
# 你可以这样使用该参数
warbler --debug
# 也可以使用它的简写模式
warbler -D
```

### --ignore-warning

携带该参数，会忽略脚手架运行时输出的提示信息（如版本更新提示）， 开启后同样会忽略调试信息，默认关闭状态

```shell
# 你可以这样使用该参数
warbler --ignore-warning
```

## commands

运行以下命令来查看如何使用某一个具体的命令

```shell
warbler <command> --help
# 比如你要查看 init 命令如何使用
warbler init --help
```
