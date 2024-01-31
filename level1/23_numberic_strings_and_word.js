// 23. 숫자 문자열과 영단어
const solution = (s) => {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  arr.forEach((item, idx) => {
    const regex = new RegExp(item, "gi");
    s = s.replaceAll(regex, idx);
  });
  return parseInt(s);
};
