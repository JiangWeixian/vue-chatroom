import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);

const state = {
  login: true,
  //PERSONAL INFO
  nickname: 'Saber',
  followAppList: [],
  ownerAppList: [],
  //CHAT
  currentThreadId: null,
  threadsList: [],
  threads: {},
  messages: {},
  //BROWE APP
  currentAppThread: {},
  tempAppPosters: {},
  appTempList: [],

  // currentThreadId: 'th1',
  // threadsList: ['th1', 'th2'],
  // threads: {
  //   th1: {
  //     id: 'th1',
  //     name: 'qidanta',
  //     avatar: 'static/img/friend/Saber.jpg',
  //     messages: ['ms1', 'ms2', 'ms3', 'ms4'],
  //     lastClickStamp: Date.now(),
  //     lastMessage: {
  //       id: 'ms4',
  //       threadId: 'th1',
  //       threadName: 'qidanta',
  //       authorName: 'Saber',
  //       text: 'v1.0 commit',
  //       timestamp: Date.now(),
  //       avatar: 'static/img/friend/Saber.jpg',
  //       isRead:false
  //     }
  //   },
  //   th2: {
  //     id: 'th2',
  //     name: 'checklee',
  //     avatar: 'static/img/friend/checklee.jpg',
  //     messages: ['ms5', 'ms6'],
  //     lastClickStamp: Date.now() - 3000,
  //     lastMessage: {
  //       id: 'ms6',
  //       threadId: 'th2',
  //       threadName: 'checklee',
  //       authorName: 'checklee',
  //       text: 'v1.4 commit',
  //       timestamp: Date.now(),
  //       avatar: 'static/img/friend/checklee.jpg',
  //       isRead:false
  //     }
  //   }
  // },
  // messages: {
  //   ms1: {
  //     id: 'ms1',
  //     threadId: 'th1',
  //     threadName: 'qidanta',
  //     authorName: 'Saber',
  //     text: 'v1.0 commit',
  //     timestamp: Date.now(),
  //     avatar: 'static/img/friend/Saber.jpg',
  //     isRead:true
  //   },
  //   ms2: {
  //     id: 'ms2',
  //     threadId: 'th1',
  //     threadName: 'qidanta',
  //     authorName: 'Saber',
  //     text: 'v1.1 commit',
  //     timestamp: Date.now() - 3000,
  //     avatar: 'static/img/friend/Saber.jpg',
  //     isRead:true
  //   },
  //   ms3: {
  //     id: 'ms3',
  //     threadId: 'th1',
  //     threadName: 'qidanta',
  //     authorName: 'Saber',
  //     text: 'v1.2 commit',
  //     timestamp: Date.now() - 6000,
  //     avatar: 'static/img/friend/Saber.jpg',
  //     isRead:true
  //   },
  //   ms4: {
  //     id: 'ms4',
  //     threadId: 'th1',
  //     threadName: 'qidanta',
  //     authorName: 'Saber',
  //     text: 'v1.3 commit',
  //     timestamp: Date.now() - 9000,
  //     avatar: 'static/img/friend/Saber.jpg',
  //     isRead:false
  //   },
  //   ms5: {
  //     id: 'ms5',
  //     threadId: 'th2',
  //     threadName: 'checklee',
  //     authorName: 'checklee',
  //     text: 'v1.4 commit',
  //     timestamp: Date.now(),
  //     avatar: 'static/img/friend/checklee.jpg',
  //     isRead:false
  //   },
  //   ms6: {
  //     id: 'ms6',
  //     threadId: 'th2',
  //     threadName: 'checklee',
  //     authorName: 'checklee',
  //     text: 'v1.5 commit',
  //     timestamp: Date.now() - 3000,
  //     avatar: 'static/img/friend/checklee.jpg',
  //     isRead:false
  //   }
  // }
};



export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
