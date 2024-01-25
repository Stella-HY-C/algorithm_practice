// 12. 행렬의 덧셈
const solution = (arr1, arr2) => {
  return arr1.map((item, idx) => {
    let a2 = arr2[idx];
    return item.map((item2, idx2) => item2 + a2[idx2]);
  });
};
