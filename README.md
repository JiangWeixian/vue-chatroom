# vuedetect

> A Vue.js project with express(**in processing**)/**REMOVE UPDATES TO UPDATE.md**

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
├── muse-ui - UI库/Ｍaterial-design
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
* [x] UI
  * [ ] background
  * [x] input filed
  * [x] hello bar
  * [x] button
  
![**LOGIN-PAGE**](https://github.com/JiangWeixian/vuedetect/blob/v1.1/README/LOGINPAGE.png)
  
**func complete!**

### REG-PAGE
This page similar to LOGININ-PAGE, we need add new actions/mutations(such as:check account...) to REG-PAGE/LOGIN-PAGE

* [x] REG.vue
  * [x] panel
  * [x] simple validate
  * [x] validate nickname/account/password/passwordConfirmed in [vee-validate's](https://github.com/logaretm/vee-validate)api-way
* [x] REG-vuex
  * [x] action-check: post data to server
* [x] server
  * [x] check info in datasets
  * [x] add newuser-info into datasets
  * [x] add new Router process check nickname and password, Returns in a specific format
* [x] UI

![**REG-PAGE**](https://github.com/JiangWeixian/vuedetect/blob/v1.1/README/REGPAGE.png)

### CHAT-ROOM
Click wake-button, enter chatroom in each pages!**Still in Processing!**

* [x] vue
  * [x] init message from state
  * [x] init threads in list from state
  * [x] add click thread func
* [x] api
  * [x] create message template
  * [x] read office message from office.js
* [ ] actions
  * [x] sendMessage
  * [x] switch thread
* [ ] mutations
  * [x] add message to state
  * [x] init office-message come from api
  * [x] switch thread to set currentThreadId
  * [ ] store thread in local
* [ ] socket
  * [x] connect to server by socket
  * [x] send message and receive(me send to me)
  * [x] xmind for message flow
  * [x] store messsages in localStorage
  * [x] send message from another side!(in .js file)
  * [ ] add/delte friend!
* [ ] server
  * [x] connect to client
  * [x] auth token
* [ ] UI
  * [x] message-thread, title
  
![**CAHATROOM**](https://github.com/JiangWeixian/vuedetect/blob/v1.1/README/chatroom.gif)  

### APPLICATION-PAGE

show some info of all the apps: 

* can serach.
* has pages
 
### APPLICATION/TYPE-PAGE
it's alpha version now!

* [x] - compelete office type
  * [ ] - user type: post user data/and modify
* [ ] - UI
* [ ] - datasets
* [ ] - server
  * [x] - get/post from/to server
* [ ] auto fetch data when data change

### USERINFO-PAGE

alpha verson components:

* home - show info sketch/can modify some things
* follows - some rows: follow apps/friends

### HOME-PAGE

Should contain brief of this website.




