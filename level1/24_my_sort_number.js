// 24. 문자열 내 마음대로 정렬하기
const solution = (strings, n) => {
  return strings.sort((a, b) => {
    return a[n] === b[n] ? (a > b ? 1 : -1) : a[n] > b[n] ? 1 : -1;
  });
};
