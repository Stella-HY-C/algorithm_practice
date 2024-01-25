// 11. 문자열 다루기 기본
const solution = (s) => {
  const length = s.length == 4 || s.length == 6;
  const a = Array.from(s).filter((item) => {
    return !(item <= 9);
  });
  return a.length === 0 && length ? true : false;
};
