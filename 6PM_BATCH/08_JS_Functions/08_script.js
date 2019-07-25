// Create / Define a Function
function printNumbers(startNumber,endNumber,incre) {
    let output = '';
    for(let i=startNumber; i<=endNumber; i += incre){
        output += `${i} `;
    }
    return output;
}
// call or Execute the function
let result = printNumbers(10,100,2);
console.log(result);

result = printNumbers(10,1000,10);
console.log(result);

// Function with no arguments
function greet() {
    console.log('Iam from no arguments Function');
}
greet();

// Function with arguments
function greetArgs(name,age) {
    console.log(`Hello ${name} You are ${age} yrs of Old`);
}
greetArgs('John',40);
greetArgs('John');
greetArgs(40);

// function with arguments with return type
function addition(a , b) {
    let sum = a + b;
    return sum;
}
let summation = addition(10,20);
console.log(`Sum of a , b is : ${summation}`);

// Object as a parameter
let mobile1 = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};

function printMobile(mobile) {
    console.log(`Brand : ${mobile.brand}
                 Color : ${mobile.color}
                 Price : ${mobile.price}`);
}
printMobile(mobile1);
printMobile({
    brand : 'Lenovo',
    color : 'Black',
    price : 25000
});

// Array as arguments
let colors = ['white','red','blue','black','orange'];
function printArray(array) {
    let output = '';
    for(let index in array){
        output += `${index} => ${array[index]} \n`;
    }
    console.log(output);
}
printArray(colors);
printArray(['html','css','javascript','jquery']);

// Function Expression
let printStars = function(theNumber) {
    let output = '';
    for(let i =1 ; i<= theNumber ; i++){
        for(let j =1; j<= i; j++){
            output += '*';
        }
        output += '\n';
    }
    return output;
};
console.log(printStars(10));

// Arrow Function ES6
let displayNumbers = (endNumber) => {
      let output = '';
      for(let i = 1; i<= endNumber; i++){
          output += `${i} `;
      }
      return output;
};
console.log(displayNumbers(10));

// Function inside an Object
// this keyword indicates the current object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// Nested Function
let outerFn = function()  {
    let innerFn = function() {
        console.log('Iam from Inner Function');
    };
    return innerFn;
};
let someFn = outerFn();
someFn();

// Callback Function
let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b, calc) => {
    return calc(a , b);
};
console.log(calculate(10,20,sum)); // 30
console.log(calculate(10,20,mul)); // 200
console.log(calculate(10,20,(a , b) => { return a - b}));

// Prepare chicken curry with functions
