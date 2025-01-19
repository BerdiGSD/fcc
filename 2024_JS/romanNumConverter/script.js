const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
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

    let output = "";
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            output += numeral;
            // console.log(`While loop #:(${num}) Numeral: ${output}`) // testing increment of the while loop
            num -= value;
        }
        // console.log(`For loop #:(${num}) Numeral: ${output}`) // testing increment of for loop to the object romanNumerals
    }
    return output;
};

const checkUserInput = () => {
    const inputInt = parseInt(number.value);
    output.style.visibility = "visible"

    if (!number.value || isNaN(inputInt)) {
        output.innerHTML = (
            `
            <Section class="output-container">
                <p>Please enter a valid number</p>
            <Section>
            `
        );
    } else if (inputInt < 1) {
        output.innerHTML = (
            `
            <Section class="output-container">
                <p>Please enter a number greater than or equal to 1</p>
            <Section>
            `
        );
    } else if (inputInt < 1 || inputInt > 3999) {
        output.innerHTML = (
            `
            <Section class="output-container">
                <p>Please enter a number less than or equal to 3999</p>
            <Section>
            `
        );
    } else {
        output.innerText = convertToRoman(inputInt)
    }
};

convertBtn.addEventListener("click", checkUserInput);

number.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput()
    }
});