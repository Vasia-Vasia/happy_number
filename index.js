const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

const isHappyNumber = (number) => {
  let i = 1;
  let final = number;

  while (i <= 10) {
    final = sumOfSquareDigits(final);
    i = i + 1;
  }

  return final === 1;
};

export default isHappyNumber;

// Проверка

const number = 7;
const result = isHappyNumber(number);

console.log(result);
