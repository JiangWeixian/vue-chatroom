import * as types from './mutation-types'
import * as api from '../api'

/**
 * func loginIn: commit types.LOGIN_IN, change state
 * @param commit: default by vue, commit funcs in mutations
 * @param nickname: the nickname of user
 * -------------------------------------------------------
 * func loginOut: commit types.LOGIN_OUT, change state
 * -------------------------------------------------------
 * func sendMessage: click button send, send message in local browser
 * @param payload: data come from ChatMainText.vue, will be render in ChatMainMessage.vue
 * -------------------------------------------------------
 * func switchThread: change current ThreadId in state
 * @param threadId: the id of thread come from ChatSiderbarList.vue
 */

export const loginIn = ({ commit }, { nickname }) => {
  commit(types.LOGIN_IN, { nickname })
};

export const loginOut = ({ commit }) => {
  commit(types.LOGIN_OUT)
};

export const initMessage = ({ commit }) => {
  api.initOfficeData()
    .then(messages => {
      commit(types.INIT_OFFICEDATA, { messages })
    })
};

export const sendMessage = ({ commit }, payload) => {
  api.createMessage(payload)
    .then(message => {
      commit(types.SEND_MESSAGE, { message } )
    })
};

export const switchThread = ({ commit }, { threadId }) => {
  commit(types.SWITCH_THREAD, { threadId });
};


