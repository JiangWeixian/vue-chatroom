# UPDATE.md
> update will showed here！

## Update-JW
The update of vuedetect-project:

* **created**: create files from 0-1
* **add**: add new to origin
* **changed**: change somethings
* **move**: move files/funcs from path1 to path2
* **fixed**: fix bugs

### 2017-4-5

* in ./src/router/login.js - **add** beforeach
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

### 2017-4-18

* in ./src/componets/RegPanel.vue - **changed** name/email/password(comfired)'s validator in [vee-validate's](https://github.com/logaretm/vee-validate)api-way
* in ./src/componets/RegPanel.vue - **add** error in data()
* in ./src/config/cfg.js - **add** const tpl

### 2017-4-19

* in ./server/router/check.js - **fixed** bugs, **add** if post-data exit? return what kind of msgs
* in ./server/config/tpl.js - **created** tpl.js as validator msg's template
* in ./server/main.js - **add** checkRouer
* in ./src/components/RegPanel.vue - **add** Check() in methods, now we can post data to server when this.validate(not this.validateAll) is true!
* in ./src/store/actions.js - **remove** func check to in ./src/components/RegPanel.vue's Check() in methods

### 2017-4-25

* in ./src/components/Chat.vue&ChatMain.vue&ChatMainMessage.vue&ChatMainText.vue&ChatSiderbar.vue&ChatSiderbarCard.vue&ChatSiderbarList.vue - **create** those files, and codes in those files
* in ./src/api - **created** this folder
* in ./src/assets - **add** avatar.jpg
* in ./src/store/getters - **add** export const currentThread&CcurrentMessage
* in ./src/api/login.js - **created** func createMessage
* in ./src/store/actions.js - **created** func sendMessage
* in ./src/store/mutations.js - **created** func SEND_MESSAGE, and func addMessage

### 2017-4-26

* in ./src/components/ChatSiderbarList.vue - **add** some codes to list threads
* in ./src/components/ChatSiderbarList.vue&ChatMainMessage.vue - **changed** v-bind:src to show img-path in getters
* in static/img - **created** this folder, and **move** avatar images to this folder

### 2017-4-27

* in ./src/components/ChatSiderBarList.vue - **add** func click to thread list
* in ./src/store/actions.js - **add** func switch_thread
* in ./src/store/mutations.js - **add** func SWITCH_THREAD

### 2017-5-15

* in ./store/actions.js & ./store/mutation.js - **add** init officedata from ./api/officeDate.js done
* in ./src/main.js - init office data when **npm run dev** by initMessage

### 2017-5-16

* in ./server/router/auth.js - **created** this file, and **add** simple auth rule
* in ./src/compoents/WakeBuutton.vue - **add** simple auth by post token to server

### 2017-5-18

* in ./src/store/mutation.js - **changed** store nickname&&login in localStorage
* in ./src/store/getters.hs - **changed** get state.nickname and state.login from localStorage
* in ./src/main.js - **add** intervalAuth for auth token each one day!

### 2017-5-19

* in ./src/components/WakeChat.vue & ./src/componets/Chat.vue - **add** props display, the methods Wake() in WakeButton.vue comtrol Chat.vue SHOW or HIDE!
* in ./src/compoents/WakeButton.vue & in ./server/router/auth.js - **fixed** some bugs when auth token  

### 2017-5-20

Learn use **Socket.io(npm socket.io --version = v3.5.2)**, find:

* io.to - can send message to sender
* socket.to & socket.broadcast.to - can't send message to sender, maybe only send message to others sockets!
* in ./src/components/ChatMainMessage.vue - **add** socket `message` for receive message, so simple online chat room is completed!

### 2017-5-21

* in ./src/api/index.js - **changed** initOfficeData() and createMessage(), now we can store messages in localstorage! 
* in ./src/main.js - **remove** intervalAuth(), because F5 refresh main.js will dispatch this function!

### 2017-5-23

how can i detect client leave our website(in socket)? those below is what i found!:

* close tab -> emit disconnect? - no! user may open link in new tab!
* refresh/duplicate will create a new Socket connect to server!
* close tab will auto emit disconnect event!
* user-socket.id - socket.id should be a array!

big boom!

* add a name(data.user) to each socket, when disconnet, i can know which one disconnect!

### 2017-5-23

* in ./src/server/main.js - **add** logoutsocket process disconnect event!
* in ./src/server/socket/logout.js - **created** this file

### 2017-5-29

* in Chatroom's vue components, complete UI

### 2017-6-2

* in ./src/components - **created** some application vue files.
* in ./src/store/action.js & mutation.js & getters.js - **created** funcs init state.appThreads and get those state.

### 2017-6-5

* in ./src/components's App - **add** UI parts to these vue files

### 2017-6-12

* in ./src/components/ChatSiderbarCard.vue - **remove** filter search into ChatSiderbarList.vue
* in ./src/components/vues - **fixed** style bugs.

### 2017-6-20

* in ./src/components/application's vue - **compelete** alpha version
* in ./src/store/actions&getters&mutation.js - **add** temp app funcs and follow app funs.
