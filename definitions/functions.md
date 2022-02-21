# functions

As the name suggests, Functional Programming is all about functions. But what is a function, after all?

From [Wikipedia](<https://simple.wikipedia.org/wiki/Function_(mathematics)#:~:text=From%20Simple%20English%20Wikipedia%2C%20the,inside%20a%20set%20of%20things>):

> In mathematics, a function is a mathematical object that produces an output, when given an input (which could be a number, a vector, or anything that can exist inside a set of things)

Thus, one can think of a function as a machine that given a specific input, will produce a corresponding output.

For instance, given the function below:

```math
f(x) = x - 42
```

For any number x, we can compute `f(x)`.

```
f(90) = 90 - 42 = 48
f(42) = 42 - 42 = 0
f(-42) = -42 - 42 = -84
```

And so on. And how does that relate to programming? Unsurprisingly, in programming, a function is also an artifcat that, given a specific input, will produce a corresponding output. For example, check the following TypeScript function:

```typescript
function f(x: number) {
  return x - 42;
}
```

We can invoke `f` passing any number `x` that we wish, and `f` will return a corresponding output for `x`.

# The anatomy of a function

# Why write functions?

## Functions are the base for code reuse

## Functions are easier to read

## Functions are easier to test
