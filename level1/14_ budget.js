// 14. 예산
const solution = (d, budget) => {
  //     d = d.sort((a, b) => a-b);

  //     let all = d.reduce((a, b) => a+b, 0);
  //     while(all > budget) {
  //         d.pop()
  //         all = d.reduce((a, b) => a+b, 0);
  //     }

  //     return d.length

  d = d.sort((a, b) => b - a);

  while (d.reduce((a, b) => a + b, 0) > budget) {
    d.shift();
  }

  return d.length;
};
