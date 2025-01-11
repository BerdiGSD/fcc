Learn Recursion by building a decimal to binary converter:

Recursion is a programming concept where a function calls itself. This can reduce a complex problem into simpler sub-problems, until they become straightforward to solve.

In this project, you’ll build a decimal-to-binary converter using JavaScript. You’ll learn the fundamental concepts of recursion, explore the call stack, and build out a visual representation of the recursion process through an animation.

~NOTES~
Your code logic is mostly correct, but there might be some contextual issues depending on how the result and input variables are defined or used in your JavaScript code. Here’s a breakdown to troubleshoot the issue:
	1.	Variable Definition:
	•	Ensure result is correctly defined and references the element you want to modify. For example:

const result = document.getElementById("result"); // Or any appropriate selector


	•	Ensure input is defined and has a value that you expect.

	2.	Type Checking:
	•	If input is a string, comparing it directly to 0 (a number) won’t work. Use === only if you’re certain both are the same type.
	•	Otherwise, ensure input is converted to a number if needed:

if (Number(input) === 0) {
    result.innerText = "0";
    return;
}


	3.	Order of Operations:
	•	The statement return result.innerText = "0"; works but is unconventional. The return keyword should generally not include an assignment for readability and debugging clarity. It might also not behave as expected depending on the broader context.
	•	Instead, do the assignment and return separately:

if (input === 0) {
    result.innerText = "0";
    return;
}


	4.	Additional Context:
	•	Check if the function containing this if statement is being called correctly.
	•	Ensure result exists in the DOM before this line of code runs.

Final Version

A cleaner and more robust version of your code:

function updateResult(input) {
    const result = document.getElementById("result"); // Ensure result exists
    if (!result) {
        console.error("Result element not found");
        return;
    }
    if (Number(input) === 0) {
        result.innerText = "0";
        return;
    }
    // Other code logic if input is not 0
}

Let me know if you’re still facing issues!

~NOTES~
Now your decimalToBinary function is complete. Feel free to play around with it.

But there are some ways to improve it. For example, it's not necessary to keep track of the inputs and quotients. We can clean things up so the function is more efficient.

First, remove everything in the body of the decimalToBinary function. Then, use let to create a variable named binary and assign it an empty string.

<!-- const decimalToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input === 0) {
        result.innerText = "0";
        return;
    }; 
    while (input > 0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    };
    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);

    result.innerText = remainders.reverse().join("")
}; -->

~NOTES~
Awesome. Now you have a more efficient way to convert decimal numbers into binary. After learning a bit about the call stack and recursion, you'll refactor the decimalToBinary function to use recursion instead of a while loop.

Create a function named a that returns the following: "freeCodeCamp " + b().

<!-- const decimalToBinary = (input) => {
    let binary = "";

    if (input === 0) {
        binary = "0";
    }

    while (input > 0) {
        binary = (input % 2) + binary;
        input = Math.floor(input /2);
    }
    result.innerText = binary;
}; -->

~NOTES~ 
In computer science, a stack is a data structure where items are stored in a LIFO (last-in-first-out) manner. If you imagine a stack of books, the last book you add to the stack is the first book you can take off the stack. Or an array where you can only .push() and .pop() elements.

The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added to the top of the stack, and when it returns, it is removed from the top / end of the stack.

You'll see this in action by creating mock call stack.

Initialize a variable named callStack and assign it an empty array.

~NOTES~ Recursion
A recursive function is a function that calls itself over and over. But you have to be careful because you can easily create an infinite loop. That's where the base case comes in. The base case is when the function stops calling itself, and it is a good idea to write it first.

Since your countdown() function will count down from a given number to zero, the base case is when the number parameter is equal to 0. Then it should return to break out of its recursive loop.

Use an if statement to check if number is equal to 0. If it is, use the return keyword to break out of the function.

~NOTES~
Now you should see a countdown from 3 to 0, followed by Reached base case, and a count from 1 to 3. This is because, after the recursive loop is finished, the function will continue to execute the code after the recursive call. This is why you see Reached base case before the count from 1 to 3.

Now that you have a better understanding of how the call stack and recursion work, you'll refactor the decimalToBinary() function to use recursion instead of a while loop.

First, remove your countDownAndUp() function and function call.

const countDownAndUp = (number) => {
    console.log(number)
    if (number === 0) {
        console.log("Reached base case");
        return;
    } else {
        countDownAndUp(number - 1);
        console.log(`Number: ${number}`)
    }
};

countDownAndUp(3);