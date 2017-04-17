# vuedetect

> A Vue.js project with express(**in processing**)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Our Goal

Until 2018, complete a website.

And,

* SEVER is based on express
* Fonter is based on Vue
* UI is based on vue-material

### Vue

The jobs of vue showed:


```
├── vue
├── vue-hot-reload-api
├── vue-loader
├── vue-material - UI库/Ｍaterial-design
├── vue-resource - vue向服务器发起请求
├── vue-router - 由于Vue属于单页面应用，该插件用于处理页面中不同路由跳转
├── vee-validate - Front end verification
├── vue-style-loader
├── vue-template-compiler
├── vue-template-es2015-compiler
├── vuex - Vue状态处理插件,数据来源于服务器.即Vue发起AJAX请求
```

And the workflow of vuex showed below:

![workflow of vuex](https://raw.githubusercontent.com/vuejs/vuex/dev/docs/en/images/vuex.png)

### Express

The jobs of express showed:

* More datasets
* More pages
* More funcs backend

### Mongoose

Use [Mongoose](http://www.nodeclass.com/api/mongoose.html) to manager Mongodb, and the datasets
stored in [Mlab Driver](www.mlab.com)


## Pages

First Commit

* The Home-Page
* The Login-Page
* The Download-Page

### LOGININ-PAGE

Should contain funcs of datasets.

* [x] loginin-router
  * [x] add history mode in router
* [x] login-vuex
  * [x] hello world
  * [x] post data to server(http://localhost:3000)
* [x] mongodb datasets
  * [x] [create free clound datasets](www.mlab.com)
  * [x] how the mongodb work
* [x] service
  * [x] cors
  * [x] create sheet in datasets/link to datasets
  * [x] add jwt-simple to server-login-router
  * [x] move secret into config
* [x] login.vue
  * [x] modify postdata
  
**func complete!**

### REG-PAGE
This page similar to LOGININ-PAGE, we need add new actions/mutations(such as:check account...) to REG-PAGE/LOGIN-PAGE

* [x] REG.vue
  * [x] panel
  * [x] simple validate
* [ ] REG-vuex
  * [x] post data to server
* [ ] server
  * [x] check info in datasets
  * [x] add newuser-info into datasets
  * [ ] add new Router process check nickname and password, Returns in a specific format



### HOME-PAGE

Should contain brief of this website.

## Update
The update of vuedetect-project:

* **created**: create files from 0-1
* **add**: add new to origin
* **changed**: change somethings
* **move**: move files/funcs from path1 to path2
* **fixed**: fix bugs

### 2017-4-5

* in ./src/router/index.js - **add** beforeach
* in ./src/store/action.js - **move** fuction LoginIn to loginPanel.vue: **add** stored token in localstorage/vue.router.go(not test)
* in ./server/router/login.js - when accout&password are found in datasets: response token

### 2017-4-6

* in ./src/compoents/LoginPanel.vue - **fixed**: using $router.push, back-button of browser working now!

### 2017-4-7

* in ./src/components/LoginPanel.vue - **change**: change postdata {nickname, account, password} to {nickname, password}
* in ./src/store/actions.js(func loginIn) - **completed** func loginIn(in actions.js), then commit func loginIn(in mutations.js)

### 2017-4-9

* in ./src/components/Reg.vue - **created** new .vue files for signup
* in ./src/components/RegPanel.vue - **created** new .vue files for signup, and **created** signup funcs

### 2017-4-10

* in ./server/router/reg.js and ./server/router/login.js- **fixed** bugs when just **res.status(code)**, should **res.status(code).send(message)**;**change** mongo.User.find to mongo.User.findOne

### 2017-4-11

* in ./src/components/RegPanel.vue **fixed** small bugs
* in ./server/router/reg.js - **add** codes, now we can add info to datasets
* in ./server/util/jwt.js - **create** this file, and **move** jwt-funs in other files into this file
* in ./src/config/cfg.js - **create** this file, add some config for vue, **change** little codes in ./src/components/RegPanel.vue and ./src/components/LoingPanel.vue
* in ./src/store/action.js - **add** func check, post nickname/account to server and check if nickname/account already exit
* in ./server/router/check.js - **create** this file, and **create** check-router

### 2017-4-13

* in ./src/store/actions.js - **add** acthion-check
* in ./src/components/RegPanel.vue - **add** blur event to dispatch action-check in store/action.js

### 2017-4-17

vee-validator&vue2.0 work in some places is not very good

* in ./src/main.js - **add** vue.use(veevalidate) as our-project's validator
* in ./src/componets/RegPanel - **add** simple name/email/password(comfired)
