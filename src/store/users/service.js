export const callApiLogin = (username, password) => {
  if (username === '123456' && password === '123456') {
    return [
      {
        data: {
          token: true,
        },
        status: 200,
      },
    ];
  } else {
    return [
      {
        data: {
          token: false,
        },
        status: 200,
      },
    ];
  }
};
