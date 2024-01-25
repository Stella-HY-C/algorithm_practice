// 13. 3진수 뒤집기
const solution = (n) => {
  // toString(n) : 10진수의 값을 n진수로 변환해줌
  // parseInt(string, n) : string의 값이 n진수라 생각해서 10진수로 변환시켜줌
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
};
