# ng-server
--- 
angular项目运行环境
* __描述__：nodejs express下的静态服务器，主要针对如angular之类的单页面应用

* __功能__：
1. gzip压缩
2. 静态缓存
3. docker部署
4. windows服务部署
* __开发__：typescript+nodejs+express
* __运行__: 

```javascript
//1.安装包 
npm install
//2.编译代码
npm run build
//3.讲angular单页面应用打包好的代码放入/dist/ngfile文件夹下
//4.运行
npm start

```