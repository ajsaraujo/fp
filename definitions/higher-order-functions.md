# Higher Order Functions

A higher order function is a function that either receives another function as input or returns a function as an output.

In JavaScript, for example, it's very common to pass a function as "callback", that is: a function to call after something happens.

## Taking functions as an argument

```javascript
function map(values, fn) {
  const mappedValues = [];

  for (const value of values) {
    mappedValues.push(fn(value));
  }

  return mappedValues;
}

map([1, 2, 3], (x) => x * 2); // [2, 4, 6]
```

The `map` function takes an array and another function as arguments. Then, it iterates over the array calling the function against the values and storing the new values in the array. Finally, it returns the array with the transformed values.

## Returning functions

Similarly, a function can also return another function, which can be called right away or stored in a variable to be called later.

```javascript
function getOperation(symbol) {
  switch (symbol) {
    case "+":
      return (a, b) => a + b;
    case "-":
      return (a, b) => a - b;
    case "*":
      return (a, b) => a * b;
    case "/":
      return (a, b) => a / b;
    default:
      return (a, b) => undefined;
  }
}

const textFieldA = document.querySelector(".text-field-a");
const textFieldB = document.querySelector(".text-field-b");
const operationField = document.querySelector(".operation");
const calculateButton = document.querySelector(".calculate");

calculateButton.addEventListener("click", () => {
  const operate = getOperation(operationField.value);
  const result = operate(+textFieldA.value, +textFieldB.value);

  if (result === undefined) {
    console.log("Invalid operation!");
  } else {
    console.log(`Result: ${result}`);
  }
});
```
