import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);

const state = {
  login: false,
  nickname: 'Saber',
  currentThreadId: 'th1',
  threads: {
    th1: {
      id: 'th1',
      name: 'qidanta',
      avatar: ''
      messages: ['ms1', 'ms2', 'ms3', 'ms4'],
      lastMessage: null
    }
  },
  messages: {
    ms1: {
      id: 'ms1',
      threadId: 'th1',
      threadName: 'qidanta',
      authorName: 'Saber',
      text: 'v1.0 commit',
      timestamp: Date.now(),
      isRead:true
    },
    ms2: {
      id: 'ms2',
      threadId: 'th1',
      threadName: 'qidanta',
      authorName: 'Saber',
      text: 'v1.1 commit',
      timestamp: Date.now() - 3000,
      isRead:true
    },
    ms3: {
      id: 'ms3',
      threadId: 'th1',
      threadName: 'qidanta',
      authorName: 'Saber',
      text: 'v1.2 commit',
      timestamp: Date.now() - 6000,
      isRead:true
    },
    ms4: {
      id: 'ms4',
      threadId: 'th1',
      threadName: 'qidanta',
      authorName: 'Saber',
      text: 'v1.3 commit',
      timestamp: Date.now() - 9000,
      isRead:false
    }
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
