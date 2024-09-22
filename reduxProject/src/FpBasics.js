import {compose, pipe} from 'lodash/fp';

// Function Composition  (Fp functional programming)
const userName = 'Mansoor';

const trim = name => name.trim();
const greetings = name => `Hello ${name} Good Morning`;
const upperCase = name => name.toUpperCase();

const result = greetings(upperCase(trim(userName)));  // Using traditional approach
const resultCom = compose(greetings, upperCase, trim);  // Compose takes funcs in back order like trim will execute first
const resultPipe = pipe(trim, upperCase, greetings);  // Pipe takes funcs in the correct order in which they execute

// Currying function {All other function will remain same}
const greetings_1 = message => name => `Hello ${name} ${message}`;
const resultPipe_1 = pipe(trim, upperCase, greetings_1("Good Morning")); 
console.log(resultPipe_1(userName));

// NOTES:
// (SEC 2)
// For Compiltaion of webpack we will use add webpack to package.json file as start or build instead of index.js file.
// For Starting of project we will use webpack serve --open as start command in package.json.

// Higher-order-function is a type of function that takes one function as an argument and returns another function.
// useEffect hook, setTimeout func are some of its examples.

// Function composition is the process of executin functions is a series like we pass one function as argument of another and so on
// Lodash a library can be used to perform functional compositiong without making it diffiult to read.
// We can use compose and pipe functions of loadash library.
// Compose and pipe retun a function whcih takes args that we have specified for our defined functions.
// Compose and pipe takes functions as args and we dont need to execute them 

// Currying is a technique which allows us to take multiple arguments of a function and convert then into a single argument fucntion as compose and pipe only execute with single arguments.
// A function that returns another function can aslo be executed like this: func(arg)(arg);
// 1st () to execute the main function 2nd () to execute the returned function.