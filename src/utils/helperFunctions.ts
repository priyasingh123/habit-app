export const isSame = <T>(arr1: T[], arr2: T[]): boolean => {
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
