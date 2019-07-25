// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Create an Array
let array = ['white',45000,true,null,undefined,{name : 'John'},[10,20]];
console.log(array);

// Access the elements
console.log(array[1]); // 45000
console.log(array[10]); // undefined

// get the Length of an array
console.log(`Length of Array : ${array.length}`);

/*
    shift() -> to remove the first element of an array
    unshift() -> to add the first element to an array
    pop() -> remove the last element of an array
    push() -> add the last element to an array
    reverse() -> to reverse the array elements
    sort() -> to sort the array elements
    splice(index) -> to remove the elements in the middle
    slice() -> to create a new copy of an array
    join() -> to join the elements of an array to string
    split() -> to split the string to an array
    filter() -> to filter the array with some conditions
    find() -> to find an element from the array with cond.
 */

// shift() to remove the first element of an array
console.log('--------------------- shift()------------------');
let technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.shift();
console.log(technologies);

// unshift() -> to add the first element to an array
console.log('--------------------- unshift()------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.unshift('NODE JS');
console.log(technologies);

//pop() -> remove the last element of an array
console.log('--------------------- pop()------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.pop();
console.log(technologies);

//push() -> add the last element to an array
console.log('--------------------- push()------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.push('NODE JS');
console.log(technologies);

//sort() -> to sort the array elements
console.log('--------------------- sort()------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.sort();
console.log(technologies);

// reverse() -> to reverse the array elements
console.log('--------------------- reverse()------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// Reverse Sort() ->
console.log('--------------------- Reverse Sort ------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);


// splice(index) -> to remove the elements in the middle
console.log('--------------------- splice(index) ------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

// splice(index,nof Elements) -> to remove no of elements in the middle
console.log('--------------------- splice(index,no of element) ------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.splice(2,1);
console.log(technologies);

// splice(index,1,replace element) -> to remove no of elements in the middle
console.log('--------------------- splice(index,1,replace element) ------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
technologies.splice(2,1,'NODE JS');
console.log(technologies);

// join() -> to join the elements of an array to string
console.log('--------------------- join() ------------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP'];
console.log(technologies);
let str = technologies.join(' - ');
console.log(str);

// split() -> to split the string into an array
console.log('--------------------- split() ------------------');
str = technologies.join(' - ');
console.log(str);
let newArray = str.split(' - ');
console.log(newArray);

// slice() -> Create a New copy of an array
let array1 = [10,20,30,40,50];
let array2 = array1.slice();
array1.splice(2);
console.log(array2);

// Looping from an Array
// Normal For Loop
let colors = ['WHITE','RED','BLACK','PURPLE','BLUE','ORANGE'];
let output = '';
for(let i = 0; i<colors.length; i++){
    output += `${colors[i]} `;
}
console.log(output);

// for-in Loop
colors = ['WHITE','RED','BLACK','PURPLE','BLUE','ORANGE'];
output = '';
for(let index in colors){
    output += `${colors[index]} `;
}
console.log(output);

// for-of loop
colors = ['WHITE','RED','BLACK','PURPLE','BLUE','ORANGE'];
output = '';
for(let color of colors){
    output += `${color} `;
}
console.log(output);

// forEach function
colors = ['WHITE','RED','BLACK','PURPLE','BLUE','ORANGE'];
output = '';
colors.forEach(function(color) {
    output += `${color} `;
});
console.log(output);

// forEach with Arrow function
colors = ['WHITE','RED','BLACK','PURPLE','BLUE','ORANGE'];
output = '';
colors.forEach(color => output += `${color} `);
console.log(output);

// filter() , find()
