const initState = {
  token: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case 'SET_TOKEN':
      return { ...state, token: payload };

    default:
      return state;
  }
};
