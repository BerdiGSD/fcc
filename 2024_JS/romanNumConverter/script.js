const numInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
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
            // console.log(`While loop #:(${num}) Numeral: ${result}`) // testing increment of the while loop
            num -= value;
        }
        // console.log(`For loop #:(${num}) Numeral: ${result}`) // testing increment of for loop to the object romanNumerals
    }
    return result;
};

const checkUserInput = () => {
    const inputInt = parseInt(numInput.value);
    result.style.visibility = "visible"

    if (!numInput.value || isNaN(inputInt) || inputInt < 1 || inputInt > 3999) {
        result.innerHTML = (
            `
            <div class="result-container">
                <p>Please enter a valid number</p>
            <div>
            `
        );
    } else {
        result.innerText = convertToRoman(inputInt)
    }
};

convertBtn.addEventListener("click", checkUserInput);

numInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput()
    }
});