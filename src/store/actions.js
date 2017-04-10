import * as types from './mutation-types'

/**
 * vuex actions
 * ------------
 * @func loginIn: commit mutations-loginIn to change state;
 *                { commit, state } defalut by vue, LoginPanel.vue pass { nickname } to actions-loginIn
 */

export const loginIn = ({ commit, state }, { nickname }) => {
  commit(types.LOGIN_IN, { nickname })
};

