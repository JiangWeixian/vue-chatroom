import Vue from 'vue'
import * as types from './mutation-types'


export const LOGIN_IN = state => {
  if (state.login) {
    window.alert("hello world")
  }
};

export const LOGIN_OUT = state => {
  state.login = false
};
