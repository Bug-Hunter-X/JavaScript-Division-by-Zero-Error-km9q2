function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b; 
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  } catch (error) {
    console.error('Error:', error.message);
    return null; // Or some other appropriate default value
  }
}

console.log(add(5,3));
console.log(subtract(5,3));
console.log(multiply(5,3));
console.log(divide(5,0));
console.log(divide(10,2));