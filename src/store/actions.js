import * as types from './mutation-types'
import Vue from 'vue'

export const loginIn = ({ commit, state }, { nickname, account, password }) => {
  commit(types.LOGIN_IN)
};
