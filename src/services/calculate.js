/** 규칙에 따라 결과를 반환합니다.
 * - S(자리와 숫자가 모두 맞음)
 * - B(숫자는 맞지만 자리가 틀림)
 */

function calculate(answer, input) {
  const count = { S: 0, B: 0 };
  let gameFinished = false;

  for (let i = 0; i < 3; i += 1) {
    if (answer[i] === input[i]) count.S += 1;
    else if (answer.includes(input[i])) count.B += 1;
  }

  if (count.S === 3) gameFinished = true;
  const result = `${count.S}S ${count.B}B`;
  return { gameFinished, result };
}

export default calculate;
