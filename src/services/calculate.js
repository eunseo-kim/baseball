/** 규칙에 따라 결과를 반환합니다.
 * - S(자리와 숫자가 모두 맞음)
 * - B(숫자는 맞지만 자리가 틀림)
 */

function calculate(answer, input) {
  const result = { S: 0, B: 0 };

  for (let i = 0; i < 3; i += 1) {
    if (answer[i] === input[i]) result.S += 1;
    else if (answer.includes(input[i])) result.B += 1;
  }

  return `${result.S}S ${result.B}B`;
}

export default calculate;
