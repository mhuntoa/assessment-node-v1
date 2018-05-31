# Part 1

Javascript skill

## Prerequisites

This part materials are in `src/part1`. Each of the question is seperated in its own file with a corresponding names. For answering each question, please write them in the provided function contain in each file.

You are free to install _any_ libreary you require. This project initially comes with only [bluebird](http://bluebirdjs.com/docs/getting-started.html) and [lodash](https://lodash.com) installed

The project is initialized with the latest ES2017 syntax. The syntax list that are set up and avalable to use are:

- `const`, `let`
- `() => {}` arrow function
- `Promise`
- `async/await`
- `ES6 class`

## 1. Asynchronous Delay

One of your program part need to wait for I/O function call. Write a function that can delay the process in Javascript. The function should take the first argument as `delay` which is the delay time in millisecond. And the second argument, `callback` which is the continue process that should run after the `delay` millisecond had passed.

## 2. Wrap It!

Assuming you have a function which take a large number of arguments. For example, `sum(a, b, c, d, e, f)` takes 5 arguments and return a sumnation of each arguments. Write a function `transformArgumentsToArray` that will take a function similar to `sum` as its argument, and return a new function takes only 1 argument as an array, but still be able to process exactly as the received function.

For example, if we pass `sum` function to `transformArgumentsToArray`, it will return a new function that can take `newSum([a, b, c, d, e, f])` and will still return the same result as calling `sum(a, b, c, d, e, f)`.

## 3. 24K Magic in the Array (eh ayy...)

Have the function `magicArray(arr)` take the `arr` array and return the sumnation of each member in the array under these condition:

- member of `arr` are garauntee to be Number type.
- if any member in `arr` is divisible by 7, it will be excluded from the calculation. For example, if the array is g the number `14` is ignored.
- The function should return the sumnation of the other member in the array.
- For example, `[5, 3, 14, 8]` should return `16`.

## 4. Wait a minute

Have the function `convertTime(num)` take a number argument. This num argument represent minutes. The function will convert minutes into hour and minute format (ie. if num = 85 it should output `1:25`) Separate the number of hours and minutes with a colon.