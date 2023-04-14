# warbler-cli

## 介绍

`warbler-cli` 是一个脚手架工具，提供快速生成代码的能力，内置多个基础模板，也可手动添加自定义模板，解决了官方脚手架每次需要从零开始创建项目的麻烦

当然，快速生成代码的能力，不仅仅用于创建项目，也可以用于快速生成一组结构相同的文件

## 安装

### 通过 npm

::: tip
**Node 版本要求**

warbler-cli 致力于现代化前端工程，因此仅支持比较先进的 Node.js v14.18.0 或更高版本 (推荐 v16 以上)。你可以使用 n，nvm 或 nvm-windows 在同一台电脑中管理多个 Node.js 版本。
:::

**全局安装**

```shell
npm i @warbler-fe/cli -g
```

**项目中安装**

```shell
npm i @warbler-fe/cli -D
```

安装之后，你就可以在命令行中访问 `warbler` 命令。你可以通过简单运行 `warbler`，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确：

```shell
warbler --version
```

# 升级

如需升级全局的 `warbler-cli` 包，请运行：

```shell
npm install -g @warbler-fe/cli
```
