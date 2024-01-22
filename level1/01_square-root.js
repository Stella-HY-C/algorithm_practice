// 01. 정수 제곱근 판별
const solution = (n) => {
  // 제곱근 구하기
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
};

console.log(solution(121));
