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
    
    const regex = /[+-\s]/g; //Note that you need to use the \ to escape the +, because a + has a special meaning in regular expressions. \g means global
    return str.replace(regex,"");
}

function isInvalidInput (str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function addEntry () {
    const targetId = "#" + entryDropdown.value;
}
