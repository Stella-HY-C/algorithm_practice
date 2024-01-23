// 06. 없는 숫자 찾기
const solution = (number) => {
  const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return arr1
    .filter((item) => !number.includes(item))
    .reduce((a, b) => a + b, 0);
};

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

// 다른사람이 푼 신박한 공식
const solution2 = (number) => {
  return 45 - number.reduce((cur, acc) => cur + acc, 0);
};

console.log(solution2([1, 2, 3, 4, 6, 7, 8, 0]));
