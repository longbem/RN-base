import numeral from 'numeral';

export const bytesToMegabytes = (bytes) =>
  numeral(bytes * 0.000001).format('0,0.00');

export const convertLocalIdentifierToAssetLibrary = (localIdentifier, ext) => {
  const hash = localIdentifier.split('/')[0];
  return `assets-library://asset/asset.${ext}?id=${hash}&ext=${ext}`;
};
