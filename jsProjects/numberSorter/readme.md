In computer science, there are fundamental sorting algorithms that all
developers should learn. In this number sorter project, you'll learn how to
implement and visualize different sorting algorithms like bubble sort, selection
sort, and insertion sort – all with JavaScript.

This project will help you understand the fundamental concepts behind these
algorithms, and how you can apply them to sort numerical data in web
applications.

TODO: Practical use cases of bubble sort, selection sort, and insertion sort
within numberSort project. 

~NOTES~ 
Spread syntax can be used when all elements from an object or array need
to be included in a new array or object, or should be applied one-by-one in a
function call's arguments list. There are three distinct places that accept the
spread syntax:

Function arguments list (myFunction(a, ...iterableObj, b)) Array literals ([1,
...iterableObj, '4', 'five', 6]) Object literals ({ ...obj, key: 'value' })

const inputValues = [...document.getElementsByClassName("values-dropdown")];
//
You need to get the values from your select elements. These values will
currently be strings and you will convert them into numbers.

Use the map function to iterate over the array. Pass a callback function to map
that takes a dropdown parameter and returns dropdown.value.

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => dropdown.value);

Update your .map() callback to call the Number() function. Pass dropdown.value to that function call.
Open the Console tab to see that your inputValues is an array of numbers now.