// 15. 이상한 문자열
const solution = (s) => {
  // 공백 위치 추가하기
  // let arr = [];
  // let count = 0;
  // s.split("").forEach((item, idx) => {
  //     // 계속 실패한 이유 : toLowerCase를 안해줘서....
  //     const a = count % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
  //     count = item === " " ? 0 : count+1;
  //     arr.push(a)
  // });
  // return arr.join("")

  let count = 0;
  return s
    .split("")
    .map((item, idx) => {
      let a = count % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
      count = item === " " ? 0 : count + 1;
      return a;
    })
    .join("");
};
