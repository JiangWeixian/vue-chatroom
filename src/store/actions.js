import * as types from './mutation-types'
import Vue from 'vue'

export const loginIn = ({ commit, state }, { name, password }) => {
  Vue.http.post('http://localhost:3000/login',{ name: name, password: password }).then(function (res) {
    console.log(res.body)
  });
  commit(types.LOGIN_IN)
};
