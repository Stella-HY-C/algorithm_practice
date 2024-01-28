const solution = (number) => {
  let result = 0;
  number.forEach((item1, idx1) => {
    number.forEach((item2, idx2) => {
      if (idx1 < idx2) {
        number.forEach((item3, idx3) => {
          if (idx2 < idx3) {
            let num = item1 + item2 + item3;
            result += num === 0 ? 1 : 0;
          }
        });
      }
    });
  });

  return result;
};
