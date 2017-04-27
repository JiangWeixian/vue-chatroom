import Vue from 'vue'

export const LOGIN_IN = (state, { nickname }) => {
  state.login = true;
  state.nickname = nickname;
  window.alert("login successfully");
};

export const LOGIN_OUT = state => {
  state.login = false;
  state.nickname = '';
  window.alert("login out")
};

export const SEND_MESSAGE = ( state, { message } ) => {
  addMessage(state, message);
};

export const SWITCH_THREAD = ( state, { threadId } ) => {
  state.currentThreadId = threadId;
};

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
