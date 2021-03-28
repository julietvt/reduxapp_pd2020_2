import ACTION_TYPES from '../actions/actionsType.js';
const initialState = {
  isFetching: false,
  users: [],
  error: null,
};
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ACTION_TYPES.GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.users,
        error: null,
      };
    case ACTION_TYPES.GET_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
