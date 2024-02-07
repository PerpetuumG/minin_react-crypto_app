export const capitalize = str => {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.substr(1);
};

export const percentDifference = (a, b) => {
  return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2);
};
