/** 초기 랜덤 값을 자동으로 세팅하기 */

function randomNumber() {
  let number = '';
  while (number.length < 3) {
    const currentRandom = Math.floor(Math.random() * 9) + 1;
    if (!number.includes(currentRandom)) {
      number += String(currentRandom);
    }
  }
  return number;
}

export default randomNumber;
