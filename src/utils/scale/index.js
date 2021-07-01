import {DEVICE_WIDTH} from '../constants/device';

const defWidthPhone = 414;

const tile = DEVICE_WIDTH / defWidthPhone;

export const scale = (w) => {
  const newSize = w * tile;
  return newSize;
};
