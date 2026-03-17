export const isSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      return false;
    }
  });
  return true;
};
