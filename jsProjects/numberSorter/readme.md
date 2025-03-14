In computer science, there are fundamental sorting algorithms that all
developers should learn. In this number sorter project, you'll learn how to
implement and visualize different sorting algorithms like bubble sort, selection
sort, and insertion sort – all with JavaScript.

This project will help you understand the fundamental concepts behind these
algorithms, and how you can apply them to sort numerical data in web
applications.

TODO: Practical use cases of bubble sort, selection sort, and insertion sort
within numberSort project. 

~NOTES~ Spread syntax can be used when all elements from an object or array need
to be included in a new array or object, or should be applied one-by-one in a
function call's arguments list. There are three distinct places that accept the
spread syntax:

Function arguments list (myFunction(a, ...iterableObj, b)) Array literals ([1,
...iterableObj, '4', 'five', 6]) Object literals ({ ...obj, key: 'value' })

const inputValues = [...document.getElementsByClassName("values-dropdown")]; //
You need to get the values from your select elements. These values will
currently be strings and you will convert them into numbers.

Use the map function to iterate over the array. Pass a callback function to map
that takes a dropdown parameter and returns dropdown.value.

The map() method of Array instances creates a new array populated with the
results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16]; // Pass a function to map const map1 =
array1.map((x) => x * 2); console.log(map1); // Expected output: Array [2, 8,
18, 32]

const inputValues =
[...document.getElementsByClassName("values-dropdown")].map((dropdown) =>
dropdown.value);

Update your .map() callback to call the Number() function. Pass dropdown.value
to that function call. Open the Console tab to see that your inputValues is an
array of numbers now.

You need a function to update the display with the sorted numbers. Start by
using arrow syntax to declare an updateUI function that takes a single array
parameter.

Because you will be writing algorithms that won't immediately have a return
value, set a fallback value for array to be an empty array. Here is an example
of a function that has a fallback value:

Example Code const myFunction = (string = "") => {

}

~NOTES~ Bubble Sort
Now you need to actually sort the array. The first sorting algorithm you will
implement is the bubble sort, which starts at the beginning of the array and
'bubbles up' unsorted values towards the end, iterating through the array until
it is completely sorted.

Begin by declaring a bubbleSort variable and assigning it an arrow function that
takes an array parameter.

~NOTES~ Selection Sort

Time to implement another sorting algorithm. This time, you'll be implementing a
selection sort. Selection sort works by finding the smallest value in the array,
then swapping it with the first value in the array. Then, it finds the next
smallest value in the array, and swaps it with the second value in the array. It
continues iterating through the array until it is completely sorted.

Start by declaring a selectionSort variable and assigning it an arrow function
that takes an array parameter.

A selection sort relies on tracking the index of the smallest value in the
array. Declare a variable minIndex and set it to i - this ensures that if your
current value is the smallest, it will be swapped with itself and not be moved.
You will need to be able to reassign the value of minIndex as you iterate
through the array.

Then, write another for loop, using j as the iterator. This loop needs to start
at the index after i and iterate through the rest of the array.

~NOTES~ Insertion Sort
An insertion sort algorithm starts the sort at the beginning of the list,
meaning the first element is already sorted. With this in mind, create a for
loop that starts at the second element in the array - it should still iterate
through the rest of the array.

Start by declaring an insertionSort variable and assigning it an arrow function
which takes an array parameter.