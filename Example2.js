
// example 1 
//Synchrouns callback
function printToConsole(greeting){
 

    console.log(greeting)
}


function getGreeting(name, cb){

    cb(`helllo ${name}`)
}


getGreeting('Hari', printToConsole)

//Asynchronous Callbacks

// example2 
// console.log('start');

// function getGreetingAsync(name, cb) {
//    setTimeout(() => {
//      cb(`Hello ${name}!`);
//    }, 0);
// }

// console.log('before getGreetingAsync');

// getGreetingAsync('Maxim', (greeting) => {
//   console.log(greeting);
// });

// console.log('end');


// Example 3 

// Define an array of numbers
// var numbers = [1, 2, 3, 4, 5];
 
// // Define the main function
// function mainFunction(callback) {
//   console.log("Performing operation...");
//   // Use Array.forEach to loop through the array of numbers
//   numbers.forEach(callback);
// }
 
// // Define the callback function
// function callbackFunction(number) {
//   console.log("Result: " + number);
// }
 
// // Call the main function with the callback function
// mainFunction(callbackFunction);