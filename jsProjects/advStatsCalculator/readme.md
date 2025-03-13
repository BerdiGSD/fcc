As you expand your JavaScript skills, you'll want to get comfortable with array
manipulation methods, such as map(), reduce(), and filter().

In this statistics calculator project, you'll gain experience with handling user
input, DOM manipulation, and method chaining. You'll get practice by performing
statistical calculations like mean, median, mode, variance, and standard
deviation.


~NOTES~ Regex breakdown
The regular expression /,\s*/g is used in the .split() method to split a string into an array based on commas (,) and optional spaces (\s*) after them.

⸻

Breaking Down the Regex /,\s*/g
	1.	, → Matches a comma.
	2.	\s* → Matches zero or more spaces (\s means any whitespace, * means zero or more).
	3.	/g → The global flag (g) ensures that all occurrences of the pattern in the string are replaced, not just the first one.

⸻

Example Usage

const value = "apple, banana,orange ,grape ,  mango";
const array = value.split(/,\s*/g);

console.log(array);

Output:

["apple", "banana", "orange", "grape", "mango"]

⸻

How It Works in This Case
	1.	"apple, banana,orange ,grape ,  mango"
	2.	The regex /,\s*/g splits at every comma, removing any spaces after it.
	3.	The result is an array of cleaned values without leading spaces.

⸻

Why Use /,\s*/g Instead of Just ","?

✅ Handles extra spaces after commas.
✅ Prevents empty elements due to inconsistent spacing.
✅ More flexible for user input variations.

Would you like an enhanced version that also removes leading/trailing spaces in each element? 😊

TODO: create a "mean" function to return the mean. 
/*
const getMean = (array) => {
    const sum = array.reduce((acc, el) => acc + el, 0); //const sum = array.reduce((accumulator, element) => accumulator + element, initial value);
    const mean = sum / array.length;
    return mean;
};
*/
// However there is a way to implicitly return the mean of the array:
const getMean = array => array.reduce((acc, el) => acc + el, 0) / array.length; 

~NOTES~
// Test code for finding median: 

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const evenListMedian = getMean([testArr2[testArr2.length / 2 - 1], testArr2[testArr2.length / 2]]);
console.log(evenListMedian);

~NOTES~
Calculating mode using the following approach: 
const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
const counts = {};
numbersArr.forEach((el) => {
  if (counts[el]) {
    counts[el] += 1;
  } else {
    counts[el] = 1;
  }
});

const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
        if (counts[el]) {
            counts[el] += 1;
        } else {
            counts[el] = 1;
        }
    });
    
}

There are a few edge cases to account for when calculating the mode of a dataset. First, if every value appears the same number of times, there is no mode.

To calculate this, you will use a Set. A Set is a data structure that only allows unique values. If you pass an array into the Set constructor, it will remove any duplicate values.

Start by creating an if statement. In the condition, create a Set with new Set() and pass it the Object.values() of your counts object. If the size property of this Set is equal to 1, that tells you every value appears the same number of times. In this case, return null from your function.