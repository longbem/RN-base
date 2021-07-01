import { BE, PATHS, privateRequest } from '@src/apis/';
import { API_KEY } from '@src/utils/constants';

export const getSamplePhotos = ({ current, filter, size }) => {
  const params = {
    size: 10,
    page: 1,
  };

  if (size) {
    params.size = size;
  }

  if (current) {
    params.page = current + 1;
  }

  if (filter) {
    params.search = filter;
  }

  return privateRequest(BE.get, `${PATHS.SAMPLE_ENDPOINT}`, {
    params: {
      limit: 10,
      api_key: API_KEY,
    },
  }).then((r) => ({
    total: 100,
    list: r,
    current: current ? current + 1 : 1,
  }));
};
