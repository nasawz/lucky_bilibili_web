# Bilibili抽奖助手

## 项目地址

https://github.com/nasawz/lucky_bilibili_web

## 项目说明

基于腾讯云[CloudBase Framework](https://github.com/Tencent/cloudbase-framework)开发的一款帮助B站UP主恰饭视频做[抽奖活动的工具](https://data-max-7gn4veyyb4a2fa4e-1256312109.tcloudbaseapp.com/catch-vlog/#/home)。

支持一键部署到腾讯云环境。
## 部署

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&appUrl=https%3A%2F%2Fgithub.com%2Fnasawz%2Flucky_bilibili_web&branch=release)

需要在腾讯云开启匿名登录权限。

![image-20201221114805639](https://md-1256312109.cos.ap-beijing.myqcloud.com/uPic/image-20201221114805639.png)



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
- [CloudBase Framework](https://github.com/Tencent/cloudbase-framework)
- [create-react-app](https://github.com/facebook/create-react-app)
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
- [react-intl](https://github.com/formatjs/react-intl)

