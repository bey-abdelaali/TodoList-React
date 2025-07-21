export function ResultReduce(currentResultState, action) {
  const { type, payload } = action;
  const number1 = Number(payload.number1);
  const number2 = Number(payload.number2);
  const errorMsg = payload.errorMsg;
  switch (type) {
    case "Sum":
      return number1 + number2;
    case "Sub":
      return number1 - number2;
    case "Mul":
      return number1 * number2;
    case "Div":
      return number2 === 0 ? errorMsg : number1 / number2;
    default:
      return currentResultState;
      break;
  }
}
