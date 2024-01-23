// 07. 내적
const solution = (a, b) => {
  let result = 0;
  a.forEach((item, i) => {
    result += item * b[i];
  });

  return result;
};

// 다른사람이 푼 문제
const solution2 = (a, b) => {
  return a.reduce((c, d, i) => (c += a[i] * b[i]));
};
