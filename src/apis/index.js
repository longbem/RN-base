import {extend} from 'umi-request';
import MainStoreStore from '@src/store';
import TokenManagement from '@src/TokenManagement';
// import TYPES from '@src/store/types';

export const BE_ENDPOINT = 'http://api.thecatapi.com';
export const TEST_DOMAIN = 'https://dev.v10xkld.xyz/';

const errorHandler = (error) => {
  if (error.message === 'Network request failed') {
    // MainStoreStore?.store?.dispatch({
    //   type: TYPES.SNACK_PUSH_MESSAGE,
    //   payload: {
    //     message: 'Network request failed',
    //     type: SNACK_TYPES.ERROR,
    //   },
    // });
    throw error;
  }

  throw error;
};

export const BE = extend({
  prefix: BE_ENDPOINT,
  errorHandler,
});

export const injectBearer = (token, configs) => {
  if (!configs) {
    return {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
  }

  if (configs.headers) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
        Authorization: `bearer ${token}`,
      },
    };
  }

  return {
    ...configs,
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
};

const TokenManager = new TokenManagement({
  isTokenValid: () => {
    return true;
  },
  getAccessToken: () => {
    return MainStoreStore?.store?.getState()?.auth?.token;
  },
});

export const privateRequest = async (request, url, configs) => {
  const token = await TokenManager.getToken();
  return request(url, injectBearer(token, configs));
};

const API_VERSION = '/api/v1';

export const PATHS = {
  // auth
  AUTH_REGISTER: `${API_VERSION}/auth/register/register`,
  SAMPLE_ENDPOINT: '/v1/images/search',
};
