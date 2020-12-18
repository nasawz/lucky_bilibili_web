# B 站抽奖助手(UI 端)

**效果图：**

![WX20190817-142810@2x](http://md.nasawz.com/WX20190817-142810@2x.png)

## 项目说明：

- 目前以 React 开发后台系统，大多数人都会选择 Antd 控件库。这个项目是为了尝试一些不同 UI 库，探索一下微软推出的 **UI Fabric**。
- 数据管理上也没有用传统的 Redux 做管理，而是尝试了 react 新推出的**useState**。用到了也许是最简单的一个 React Hooks 状态管理器**flooks**。
- 控件上也都是用**Function components**做的开发。
- ~~API 层面采用到了**GraphQL**,并集成了一份 GraphQL 代码生成器：**graphql-code-generator**（需配合服务端使用）。~~
- 内置**react-intl**支持多国语言功能，并附有生成语言文件脚本，扫描 src 文件夹下的代码，提取出语言文件并以 json 文件的形式存入 translations 文件夹下。
- 前端项目的搭建采用了标准的**create react app**语法选用了**Typescript**。采用**react-app-rewired**对 webpack 编译做了定制化改造。
- ~~后台程序采用了**parseplatform**做的开发(这是另一个项目)~~。
- 后台采用了TCB云函数。

---

> 俗话说要 **学以致用** 所以我以上边列出的技术栈打造了一个功能完备的小工具 `B站抽奖助手`，下边是它的功能介绍。

## 部署


[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&appUrl=https%3A%2F%2Fgithub.com%2Fnasawz%2Flucky_bilibili_web&branch=release)

## 本地运行

本项目为 UI 界面，内置了模拟数据。

```bash
# 安装依赖，或 npm i
yarn

# 运行
yarn start
```



## 功能介绍

- 提取 Up 主的视频资料与留言数据
- 设置奖项与名额
- 设置抽奖条件
  - 一个人多次留言是否只有一次抽奖机会
  - 是否只有 Up 主的应援团可以参与抽奖
  - 必须要包含的留言关键字
  - 留言的截至日期
  - 要排除的用户（通常是 Up 自己）

### 附录参考资料

- [UI Fabric](https://developer.microsoft.com/en-us/fabric#/)
- [flooks](https://github.com/nanxiaobei/flooks)
- [graphql-code-generator](https://graphql-code-generator.com)
- [create-react-app](https://github.com/facebook/create-react-app)
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
- [parseplatform](https://parseplatform.org)
- [react-intl](https://github.com/formatjs/react-intl)

---

如果你觉得这个项目有点用就随缘给点赏钱吧。 (๑•̀ㅂ•́)و✧

![IMG_6397](http://md.nasawz.com/IMG_6397.jpg)

推荐一个低碳健康饮食的 Up ( \*￣ ▽ ￣)o ─═≡※:☆

![WechatIMG1741](http://md.nasawz.com/WechatIMG1741.png)
