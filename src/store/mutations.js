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

function initThreadsList(state, threadId) {
  state.threadsList.push(threadId);
}

function setCurrentThread(state, threadId) {
  state.currentThreadId = threadId;
  if(!state.threads[threadId]) {
    debugger
  }
  state.threads[threadId].lastMessage.isRead = true;
  state.threads[threadId].lastClickStamp = Date.now();
}

function createThread(state, threadId, threadName) {
  Vue.set(state.threads, threadId, {
    id: threadId,
    name: threadName,
    avatar: staticFriendAvatarPath + threadName + '.jpg',
    messages: [],
    lastClickStamp: null,
    lastMessage: null
  })
}

function addMessage(state, message) {
  const thread = state.threads[message.threadId];
  message.isRead = message.threadId == state.currentThreadId;
  if(!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id);
    thread.lastMessage = message;
    thread.lastClickStamp = message.timestamp;
  }
  Vue.set(state.messages, message.id, message);
}
