// 09. 약수의 갯수 더하기
// const arrLength = (num) => {
//   return (
//     Array.from({ length: num }, (v, i) => i + 1).filter(
//       (t) => Number.isInteger(num / t) ?? t
//     ).length % 2
//   );
// };

// or

const arrLength = (num) => {
  let numArr = [];
  for (let i = 1; i <= num; i++) {
    Number.isInteger(num / i) ? numArr.push(i) : "";
  }
  return numArr.length % 2;
};

const solution = (left, right) => {
  const arr = Array.from({ length: right - left + 1 }, (v, i) => left + i);
  return arr.reduce((a, b) => (arrLength(b) === 0 ? (a += b) : (a -= b)), 0);
};

// 다른사람 풀이 -> 제곱근이 정수면 약수의 갯수가 홀수...!(생각도 못했다...!)
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
