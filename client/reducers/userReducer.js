import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 *
 *
 * @export
 * @param {any} [state=initialState.courses]
 * @param {any} action
 * @returns {object} user object
 */
export default function courseReducer(state = initialState.users, action) {
  switch (action.type) {
  case types.CREATE_USER_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.user)
    ];

  default:
    return state;
  }
}
