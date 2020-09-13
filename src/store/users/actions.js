export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    payload: token,
  };
};

export const fetchLogin = (username, password) => {
  return {
    type: 'LOGIN',
    payload: {
      username,
      password,
    },
  };
};
