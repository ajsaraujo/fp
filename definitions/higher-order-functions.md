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

function getOutput(operandA, operandB, operatorSymbol) {
  const operate = getOperation(operatorSymbol);
  const result = operate(operandA, operandB);

  return result;
}

const textFieldA = document.querySelector(".text-field-a");
const textFieldB = document.querySelector(".text-field-b");
const operationField = document.querySelector(".operation");
const calculateButton = document.querySelector(".calculate");

calculateButton.addEventListener("click", () => {
  const output = getOutput(
    textFieldA.value,
    textFieldB.value,
    operationField.value
  );

  document.querySelector(".output").text = `Result: ${output}`;
});
```

In this example the `getOperation` function returns a different function performing a mathematical operation based on the symbol that was passed.
Check the [Codepen](https://codepen.io/ajsaraujo/pen/QWOrNRW) for a fully working example.
