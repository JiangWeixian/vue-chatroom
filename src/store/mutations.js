import Vue from 'vue'
import { staticFriendAvatarPath } from '../config/cfg'


export const LOGIN_IN = (state, { nickname }) => {
  localStorage.setItem('nickname', nickname);
  localStorage.setItem('login', true);
  state.login = localStorage.getItem('login');
  state.nickname = localStorage.getItem('nickname');
  window.alert("login successfully");
};

export const LOGIN_OUT = state => {
  localStorage.setItem('nickname', '');
  localStorage.setItem('login', false);
  state.login = localStorage.getItem('login');
  state.nickname = localStorage.getItem('nickname');
  localStorage.setItem('token', null);
  window.alert("login out")
};

export const INIT_OFFICEDATA = ( state, { messages } ) => {
  let lastestMessage;
  state.threadsList = [];
  messages.forEach(message => {
    if(!state.threads[message.threadId]) {
      createThread(state, message.threadId, message.threadName);
      initThreadsList(state, message.threadId)
    }
    if(!lastestMessage || message.timestamp > lastestMessage.timestamp) {
      lastestMessage = message
    }
    addMessage(state, message)
  });
  setCurrentThread(state, lastestMessage.threadId);
};

export const SEND_MESSAGE = ( state, { message } ) => {
  addMessage(state, message);
};

export const SWITCH_THREAD = ( state, { threadId } ) => {
  setCurrentThread(state, threadId);
};

//APP-FUNCS

export const SET_APP = ( state, { appHeader, appInfo, appHome } ) =>{
  createAppThreads(state, appHeader, appInfo);
  state.appTempList.push(appHeader.name);
  appHome.forEach(poster => {
    addTempAppPosters(state, poster);
    state.currentAppThread.posters.push(poster.name);
  });
};

//FOLLOW-APP-FUNCS
export const FOLLOW_APP = (state, name) => {
  let apps = state.followAppList;
  let finded = false;
  apps.forEach(function (item, index) {
    if(item == name) {
      apps.splice(index, 1);
      finded = true;
    }
  });
  if(!finded) {
    apps.push(name);
  }
  state.followAppList = apps;
  localStorage.setItem('followAppList', JSON.stringify(state.followAppList));
};


// APP-FUNCS
function createAppThreads(state, appHeader, appInfo) {
  const currentAppThread = {
    name: appHeader.name,
    avatar: appHeader.avatar,
    info: appInfo,
    posters: []
  };
  state.currentAppThread = currentAppThread;
}

function addTempAppPosters(state, poster) {
  Vue.set(state.tempAppPosters, poster.name, poster);
}

// CHATROOM-FUNCS
function initThreadsList(state, threadId) {
  state.threadsList.push(threadId);
}

function setCurrentThread(state, threadId) {
  state.currentThreadId = threadId;
  if(!state.threads[threadId]) {
    debugger
  }
  let currentThread = state.threads[threadId];
  currentThread.lastMessage.isRead = true;
  currentThread.lastClickStamp = Date.now();
  currentThread.count = 0;
  state.threads[threadId] = currentThread;
}

function createThread(state, threadId, threadName) {
  Vue.set(state.threads, threadId, {
    id: threadId,
    name: threadName,
    avatar: staticFriendAvatarPath + threadName + '.jpg',
    messages: [],
    lastClickStamp: null,
    lastMessage: null,
    count: 0
  })
}

function addMessage(state, message) {
  const thread = state.threads[message.threadId];
  message.isRead = message.threadId == state.currentThreadId;
  if(!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id);
    thread.lastMessage = message;
    thread.lastClickStamp = message.timestamp;
    thread.count = message.isRead? thread.count: parseInt(thread.count)+1;
  }
  Vue.set(state.messages, message.id, message);
}
