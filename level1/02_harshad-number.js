// 02. 하샤드 수
const solution = (x) => {
  const arr = (x + "").split("");
  const c = arr.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  }, 0);
  return Number.isInteger(x / c);
};

console.log(solution(10));
