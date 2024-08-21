function averageOfNum(arr) {
  let sum = 0;
  let count = 0;

  for (let element of arr) {
    if (typeof element === "number") {
      sum += element;
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}

let array = [];
let input;

for (let i = 0; i < 5; i++) {
  input = parseInt(prompt("Введіть елемент масиву номер #" + (i + 1)));

  if (!isNaN(input)) {
    array.push(input);
  }
}

let average = averageOfNum(array);

console.log(average);
