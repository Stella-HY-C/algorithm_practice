// 22. 가장 가까운 글자
const solution = (s) => {
  return s.split("").map((item, idx) => {
    let num = s.substr(0, idx).lastIndexOf(item);
    return num !== -1 ? idx - num : num;
  });
};
