// 04. 음양 더하기
const solution = (absolutes, signs) => {
  const arr = absolutes.map((item, idx) => (signs[idx] ? item : item * -1));

  return arr.reduce((a, b) => a + b, 0);
};

console.log(solution([4, 7, 12], [true, false, true]));
