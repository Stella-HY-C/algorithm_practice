// 05. 콜라츠 추측
const solution = (num) => {
  let newNum = num;
  let result = 0;

  // newNum이 1이 되기전까지 반복
  // 1이 되기전에 500번 반복하면 -1로 반환
  while (newNum !== 1 && result <= 500) {
    // 홀,짝 구분(홀 : false, 짝 : true)
    newNum = newNum % 2 == 0 ? newNum / 2 : newNum * 3 + 1;

    result++;
  }

  return result > 500 ? -1 : result;
};

console.log(solution(6));
