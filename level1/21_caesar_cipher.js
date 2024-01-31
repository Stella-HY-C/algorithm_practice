// 21. 시저암호
const solution = (s, n) => {
  // 공백은 계속 공백 -> 32
  let arr = s.split("").map((item) => {
    let char = item.charCodeAt();
    let plus = char + n;
    let result = "";
    // 대문자 일 경우 90(Z)에서 다시 65(A)로 가야함
    // 소문자 일 경우 122(z)에서 다시 97(a)로 가야함
    // 두개의 차가 25인데 25인데 이렇게 하면 한글자가 더 빠지게 되어 25으로 해줌
    if (item !== " ") {
      /* 
                대문자                          소문자
                코드가 90보다 작거나 같고(A-Z)      코드가 122보다 작거나 같고(a-z)
                코드 + n이 90보다 크면            코드 + n이 122보다 크면
                다시 대문자 65로 돌려보내기         다시 소문자 95로 돌려보내기
            */
      if ((char <= 90 && plus > 90) || (char <= 122 && plus > 122)) {
        result = String.fromCharCode(char + n - 26);
      } else {
        result = String.fromCharCode(char + n);
      }
    } else {
      result = item;
    }

    return result;
  });

  return arr.join("");
};
