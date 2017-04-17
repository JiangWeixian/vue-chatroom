import * as types from './mutation-types'
import * as cfg from '../config/cfg'
import Vue from 'vue'

/**
 * func loginIn: commit types.LOGIN_IN, change state
 * @param commit: default by vue, commit funcs in mutations
 * @param nickname: the nickname of user
 * --------------------------------------------------------
 * func check: post item to server, check item already exit or not
 * @param item: the data should be checked by server
 */

export const loginIn = ({ commit }, { nickname }) => {
  commit(types.LOGIN_IN, { nickname })
};

export const check = ({ commit }, { item }) => {
  console.log(typeof item);
  if (item.trim()) {
    Vue.http.post(cfg.url + 'check', {item})
      .then(function (res) {
        console.log('already exit')
      }, function (res) {
        console.log('not exit')
      })
  }
  else {
    console.log('can\'t be empty');
  }
};
