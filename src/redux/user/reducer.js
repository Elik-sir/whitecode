import { SIGN_IN, START_FETCH } from './constants';
import { searchUser } from './user.utils';
const defaultState = {
  users: [
    { login: '123', password: '123', nickName: 'Eldar1' },
    { login: 'qwe', password: '1233', nickName: 'Eldar2' },
    { login: '333', password: '1234', nickName: 'Eldar3' },
  ],
  currentUser: null,
  isLoading: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_FETCH:
      return { ...state, isLoading: true };
    case SIGN_IN:
      return {
        ...state,
        isLoading: false,
        currentUser: searchUser(state.users, action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
