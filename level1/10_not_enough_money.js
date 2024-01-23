// 10. 부족한 금액 계산하기
const solution = (price, money, count) => {
  let a = 0;
  for (let i = 1; i <= count; i++) {
    a += price * i;
  }

  return Math.sign(a - money) !== -1 ? a - money : 0;
};
