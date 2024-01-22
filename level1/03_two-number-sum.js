// 03. 두 정수 사이의 합
const solution = (a, b) => {
  let t1 = Math.min(a, b);
  let t2 = Math.max(a, b);
  let result = 0;

  while (t1 <= t2) {
    result += t1;
    t1++;
  }

  return result;
};

console.log(solution(3, 5));
