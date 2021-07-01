export const normalizeOptions = (options) => {
  if (!Array.isArray(options)) {
    return normalizeOptions([options]);
  }

  if (options.length === 1) {
    const [value] = options;
    return [value, value, value, value];
  }

  if (options.length === 2) {
    return [...options, ...options];
  }

  return options;
};

export const fahrenheitToCelsius = (f) => {
  return Math.floor((5 / 9) * (f - 32));
};

export const kelvinToCelcius = (k) => Math.floor(k - 273.15);

export const formatMoney = (money) => {
  let a = money !== undefined && money !== null ? money : 0;
  return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};
