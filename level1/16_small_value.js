// 16. 크기가 작은 부분문자열
const solution = (t, p) => {
  return t
    .split("")
    .map((v, i) => {
      let a = t.substring(i, i + p.length);
      return a.length === p.length && parseInt(a) <= parseInt(p) ? a : null;
    })
    .filter((item) => item).length;
};
