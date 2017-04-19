import * as types from './mutation-types'


export const LOGIN_IN = (state, { nickname }) => {
  state.login = true;
  state.nickname = nickname;
  window.alert("login successfully");
};

export const LOGIN_OUT = state => {
  state.login = false
};
