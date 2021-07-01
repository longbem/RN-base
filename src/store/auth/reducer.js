import TYPES from '../types';

const initState = {
  userInfo: null,
  token: null,
};

const auth = (state = initState, {type, payload}) => {
  switch (type) {
    case TYPES.LOG_IN:
      return {...state, token: payload.token};
    case TYPES.SAVE_USER_INFO:
      return {...state, userInfo: payload};
    case TYPES.LOG_OUT:
      return {
        ...initState,
      };
    default:
      return state;
  }
};

export default auth;
