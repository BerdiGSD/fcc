const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString (str) {
    /* While looping through the string works, 
    creating a new array is inefficient for memory and runtime performance. 
    Instead, you can use Regular Expressions (referred to as "regex") to match 
    specific characters. 

    const strArray = str.split('');
    const cleanStrArray = [];
    for (let i = 0; i < strArray.length; i++){
        if (!["+","-"," "].includes(strArray[i])){
            cleanStrArray.push(strArray[i]);
        }
    }
    */
    const regex = /[+-\s]/g; 
    /* Regex:
    Note that you need to use the \ to escape the +, 
    because a + has a special meaning in regular expressions. \g means global */
    return str.replace(regex,"");
}

function isInvalidInput (str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function addEntry () {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input 
        type="text" 
        id="${entryDropdown.value}-${entryNumber}-name" 
        placeholder="Name"
        />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input 
        type="number" 
        id="${entryDropdown.value}-${entryNumber}-calories" 
        placeholder="Calories" 
        min="0"
        />`; 
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString); 
    /*The insertAdjacentHtml method takes two arguments. 
    The first argument is a string that specifies the position of the inserted element. 
    The second argument is a string containing the HTML to be inserted. */
}
/* This function will be another event listener, 
so the first argument passed will be the browser event 
– e is a common name for this parameter. */
function calculateCalories (e) {
    e.preventDefault()
    isError = false;

    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    if (isError) {
        return ;
    }
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;
    output.classList.remove('hide');
}

function getCaloriesFromInputs (list) {
    let calories = 0;
    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}

function clearForm () {
    const inputContainer = Array.from(document.querySelectorAll('.input-container'));
    for (let container of inputContainer) {
        container.innerHTML = '';
    }
    budgetNumberInput.value = '';
    output.innerText = '';
    output.classList.add('hide');
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click",clearForm);