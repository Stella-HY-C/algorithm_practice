// 17. 최대공약수와 최소공배수
const solution = (n, m) => {
  // 최대 공약수 : 약수 중 가장 큰값
  // 최소 공배수 : 배수 중 가장 작은값
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  // 유클리드 호제법
  // - a, b를 서로 나눌때 나누어진다면 b가 최대 공약수
  // - 나눠지지 않는다면 a와 b을 나눈 나머지를 다시 b로 나눈다
  // - 서로 나눠지지 않는다면 a%b가 최대 공약수이다.
  // - 최소공배수는 최대공약수를 이용해 사용할 수 있다.
  // - a와 b를 곱해 최대 공약수로 나누면 된다.
  const gcdFunction = (a, b) => {
    // b % a로 하면 2, 5케이스에서 무한루프가 되어 call stack에러가 난다.
    // 그래서 a % b로 하게 되어 큰값이 a로 가게끔 구현하고 나머지값이 뒤로가게 하여 구현하게 함
    return a % b === 0 ? b : gcdFunction(b, a % b);
  };

  // 최대 공약수
  let gcd = gcdFunction(min, max) === 0 ? min : gcdFunction(min, max);
  // 최소 공배수
  let lcm = (min * max) / gcd;
  return [gcd, lcm];
};
