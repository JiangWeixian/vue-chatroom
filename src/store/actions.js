import * as types from './mutation-types'
import Vue from 'vue'

export const loginIn = ({ commit, state }, { nickname, account, password }) => {
  Vue.http.post('http://localhost:3000/login',{ nickname: nickname, account: account, password: password }).then(function (res) {
    console.log(res)
  });
  commit(types.LOGIN_IN)
};
