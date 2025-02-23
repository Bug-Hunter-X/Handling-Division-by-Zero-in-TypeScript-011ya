function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    return 0; //or throw new Error('Cannot divide by zero');
    //Return a default value or handle the exception appropriately.
  }
  return a / b;
}

console.log(add(2, 2)); // 4
console.log(subtract(5, 3)); // 2
console.log(multiply(4, 2)); // 8
console.log(divide(10, 2)); // 5
console.log(divide(10, 0));//0