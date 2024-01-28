// 18. 두 개 뽑아서 더하기
const solution = (numbers) => {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      i < j && arr.indexOf(numbers[i] + numbers[j]) == -1
        ? arr.push(numbers[i] + numbers[j])
        : null;
    }
  }
  return arr.sort((a, b) => a - b);
};
