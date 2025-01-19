TODO: Build a Roman Numeral Converter Project

For this project the goal is to build an application that converts integers to Roman numerals.

Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
Objective: Build an app that is functionally similar to https://roman-numeral-converter.freecodecamp.rocks.

User Stories:

*Requirement* 
1. You should have an input element with an id of "number".
2. You should have a button element with an id of "convert-btn".
3. You should have a div, span or p element with an id of output.
4. When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number".
5. When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
6. When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999".
7. When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX".
8. When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI".
9. When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX".
10. When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII".
11. When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX".
12. Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

^Tests^
1. You should have an input element with an id of "number".
2. You should have a button element with an id of "convert-btn".
3. You should have a div, span, or p element with an id of "output".
4. When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number".
5. When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
6. When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999".
7. When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX".
8. When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI".
9. When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX".
10. When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII".
11. When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX".
12. When the #number element contains a random negative number and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
13. When the #number element contains a number greater than 4000 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999".

~NOTES~ How to run a test on vscode.
To run the specified tests for a webpage, you need a JavaScript file that:
	1.	Handles input validation.
	2.	Converts numbers to Roman numerals.
	3.	Outputs error or success messages based on input.

Here’s a complete solution:

1. HTML Structure

Ensure your HTML has the required elements:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number to Roman Numeral Converter</title>
</head>
<body>
    <input type="number" id="number" placeholder="Enter a number">
    <button id="convert-btn">Convert</button>
    <div id="output"></div>

    <script src="script.js"></script>
</body>
</html>

2. JavaScript Logic

Create a file named script.js and implement the following:

// Function to convert a number to Roman numerals
function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}

// Event listener for the button
document.getElementById("convert-btn").addEventListener("click", () => {
    const input = document.getElementById("number-input").value;
    const result = document.getElementById("result");

    if (input === "") {
        result.innerText = "Please enter a valid number";
        return;
    }

    const number = parseInt(input, 10);

    if (isNaN(number)) {
        result.innerText = "Please enter a valid number";
    } else if (number < 1) {
        result.innerText = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        result.innerText = "Please enter a number less than or equal to 3999";
    } else {
        result.innerText = convertToRoman(number);
    }
});


3. Explanation
	1.	Input Validation:
	•	Check if the input is empty.
	•	Validate if it’s a number.
	•	Ensure it’s within the range [1, 3999].
	2.	Conversion Function:
	•	Maps numbers to Roman numeral equivalents.
	•	Iterates through the mappings to build the Roman numeral representation.
	3.	Error Handling:
	•	Displays error messages for invalid inputs or out-of-range numbers.
	4.	Button Click Handling:
	•	Reads the input value.
	•	Displays either the Roman numeral or an error message in the #output element.

4. Testing the Code

Test the following scenarios in your browser:
	•	No input: Should display “Please enter a valid number”.
	•	Input -1: Should display “Please enter a number greater than or equal to 1”.
	•	Input 4000: Should display “Please enter a number less than or equal to 3999”.
	•	Valid inputs like 9, 16, 649, 1023, and 3999 should display “IX”, “XVI”, “DCXLIX”, “MXXIII”, and “MMMCMXCIX” respectively.

This ensures all the specified requirements are met! Let me know if you need further clarification.