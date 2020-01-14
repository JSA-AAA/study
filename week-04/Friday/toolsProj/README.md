# **Tools Project**

## **Required Topics**

>**Required to create and configure a React app without create-react-app**

### **Must Include**

- Npm
- babel
- webpack
- eslint
- jest, enzyme
- express(for study only, no trequired in project)

> **Suggested order**:
>
> - init JS project
> - add later, not totally sure about the best practice procedures now

## **Goal**
- [ ] 实现的功能可以很简单，只要有基本的增删查改（CRUD)即可。
- [ ] generate coverage report
- [ ] 用express实现4个API， method分别是GET\POST\PUT\DELETE。并且在前端成功调用。
- [ ] eslint如何配置自己的规则？
- [ ] babel配置中的preset用于设置什么？
- [ ] webpack中的output用于配置什么？
- [ ] webpack的loader和plugin分别是什么，有什么区别？
- [ ] webpack中如何开启热更新（hot-reload)?
- [ ] webpack中的sourcemap有什么用？
- [ ] understand dependencies, devDependencies, peerDependencies
- [ ] follow the logic and steps of create a react app, study required dependencies on each step

## **Question need to solve**

- what is babel, webpack used for and how to use them?
- how to add eslint check for JS project

## **Key Concepts**

## **Materials / Study Note**

- react app setup series
  - [init JS project with npm](https://www.robinwieruch.de/javascript-project-setup-tutorial)
  - [setup webpack proj](https://www.robinwieruch.de/webpack-setup-tutorial/)
  - [setup babel](https://www.robinwieruch.de/webpack-babel-setup-tutorial/)
  - [react app](https://www.robinwieruch.de/minimal-react-webpack-babel-setup)

## **Question Encountered**

>*Note: check after resolved by yourself or during discussion*

## **Discussion**
- [ ] 实现的功能可以很简单，只要有基本的增删查改（CRUD)即可。
- [ ] generate coverage report
- [ ] 用express实现4个API， method分别是GET\POST\PUT\DELETE。并且在前端成功调用。
- [ ] eslint如何配置自己的规则？
- [ ] babel配置中的preset用于设置什么？
  - 通过presets设置语言环境,babel会根据语言环境找到合适的插件的集合完成这个环境的转换.
- [ ] webpack中的output用于配置什么？
  - 指定自己打包后生成的js文件的地址和名字.
- [ ] webpack的loader和plugin分别是什么，有什么区别？
  - loader：实现文件转换。开始编译就一个一个进行转换处理，无法指定发生周期。
  - plugin：与生命周期有关。在一个特定的阶段调用，可以做各种各样的事情。在不同的步骤根据plugin的定义来促发特定事件。
- [ ] webpack中如何开启热更新（hot-reload)?
- [ ] webpack中的sourcemap有什么用？
  - sourcemap可以定位被打包后js（如bundle.js）中的错误发生的地方。对编译速度有影响。
- [ ] understand dependencies, devDependencies, peerDependencies
  - devDependencies: 开发和客户不需要开发环境中的依赖包.
  - peerDependencies: 用于指定你正在开发的模块所依赖的版本以及用户安装的依赖包版本的兼容性.
- [ ] follow the logic and steps of create a react app, study required dependencies on each step

## **Project links**

[Cathy](https://github.com/x566chen/SimpleButton)

[Arhtur](https://github.com/eleven032/React-App-WithoutCRA)

[Hao](https://github.com/yuhao3570/react-no-cra)
