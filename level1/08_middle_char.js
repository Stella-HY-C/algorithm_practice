// 08. 가운데 글자 가져오기
const solution = (s) => {
  let a = Math.floor(s.length - s.length / 2);
  let ab = s.length % 2 === 1 ? "" : s[a - 1];
  return ab + s[a];
};
