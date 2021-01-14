export const isTrickyChoise = (arr: number[], index: number): boolean => {
  let result = false;
  if (arr.length >= 3) {
    const last = arr[arr.length - 2];
    const preLast = arr[arr.length - 3];
    if (index === last && last === preLast) {
      result = true;
    }
  } else {
    result = false;
  }
  return result;
};

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 5);
};

export const getSmartNumber = (index: number): number => {
  let result;

  if (index === 0 || index === 1) {
    result = index + 1;
  } else if (index === 3 || index === 4) {
    result = index - 1;
  } else {
    result = index + 2;
  }
  return result;
};
