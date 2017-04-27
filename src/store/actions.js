import * as types from './mutation-types'
import * as api from '../api'

/**
 * func loginIn: commit types.LOGIN_IN, change state
 * @param commit: default by vue, commit funcs in mutations
 * @param nickname: the nickname of user
 * -------------------------------------------------------
 * func loginOut: commit types.LOGIN_OUT, change state
 * --------------------------------------------------------
 */

export const loginIn = ({ commit }, { nickname }) => {
  commit(types.LOGIN_IN, { nickname })
};

export const loginOut = ({ commit }) => {
  commit(types.LOGIN_OUT)
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


