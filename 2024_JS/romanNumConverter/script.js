const numInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const convertToRoman = (num) => {
    const romanNumerals = [
        {
            value: 1000,
            numeral: "M"
        },
        {
            value: 900,
            numeral: "CM"
        },
        {
            value: 500,
            numeral: "D"
        },
        {
            value: 400,
            numeral: "CD"
        },
        {
            value: 100,
            numeral: "C"
        },
        {
            value: 90,
            numeral: "XC"
        },
        {
            value: 50,
            numeral: "L"
        },
        {
            value: 40,
            numeral: "XL"
        },
        {
            value: 10,
            numeral: "X"
        },
        {
            value: 9,
            numeral: "XV"
        },        {
            value: 5,
            numeral: "V"
        },        {
            value: 4,
            numeral: "IV"
        },        {
            value: 1,
            numeral: "I" 
        }
    ]
}

const checkUserInput = () => {
    const inputInt = parseInt(numInput.value);

    if (
        !numInput.value ||
        isNaN(inputInt) ||
        inputInt < 1 ||
        inputInt > 3999
    ) {
        document.getElementsByClassName("output-container").innerHTML(
            `
            <section class="output-container">
                <p>Input must be a number between 1 and 3999.</p>
            <section>
            `
        );
        return;
    }
}

convertBtn.addEventListener("click", checkUserInput);

numInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput()
    }
});