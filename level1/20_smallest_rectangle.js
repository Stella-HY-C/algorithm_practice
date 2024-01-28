// 20. 최소 직사각형
const solution = (sizes) => {
  // 가로가 길게 세로가 짧게 정리
  // 그중에서 가장 큰값 찾기
  let wMax = 0;
  let hMax = 0;
  sizes.forEach((item, idx) => {
    let width = Math.max(item[0], item[1]); // 가로
    let height = Math.min(item[0], item[1]); // 세로

    if (idx === 0) {
      (wMax = width), (hMax = height);
    } else {
      wMax = width >= wMax ? width : wMax;
      hMax = height >= hMax ? height : hMax;
    }
  });

  return wMax * hMax;
};
