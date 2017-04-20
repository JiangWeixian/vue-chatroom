import * as types from './mutation-types'
import * as cfg from '../config/cfg'
import Vue from 'vue'

/**
 * func loginIn: commit types.LOGIN_IN, change state
 * @param commit: default by vue, commit funcs in mutations
 * @param nickname: the nickname of user
 * --------------------------------------------------------
 */

export const loginIn = ({ commit }, { nickname }) => {
  commit(types.LOGIN_IN, { nickname })
};


