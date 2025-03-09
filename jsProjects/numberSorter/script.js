const sortButton =  document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown")
    ].map((dropdown) => Number(dropdown.value));

    // const sortedValues = bubbleSort(inputValues); // Utilizing bubble sort
    // const sortedValues = selectionSort(inputValues); // Utilizing selection sort
    // const sortedValues = selectionSortFireShipVersion(inputValues); // Utilizing selection sort fireship version
    // const sortedValues = insertionSort(inputValues); // Utilizing Insertion sort
    const sortedValues = inputValues.sort((a, b) => { return a - b });
    updateUI(sortedValues);

};

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    })
};

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // console.log(`Array: ${array}, Array[j]: ${array[j]}, Array[j+1]: ${array[j + 1]}`); 
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < array.length; j++) {
            // console.log(`Array: ${array}, Array[j]: ${array[j]}, Array[minIndex: ${array[minIndex]}`)
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
};


const selectionSortFireShipVersion = (arr) => {
    console.log("Initial array: " + arr)
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        console.log("first loop i: " + arr[min])
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                console.log(`array[${arr[j]}] < array[${min}]`);
                console.log("IF arr[j] < arr[min]: " + (arr[j] < arr[min]));
                min = j;
                console.log("Second loop j: " + arr[min]);
            }
        }
        if (min !== i) {
            console.log(`min being ${min} and i being ${i}`);
            console.log("IF min !== i: " + (min !== i));
            [arr[i], arr[min]] = [arr[min], arr[i]];
            console.log(`Swap: [${arr[i]}, ${arr[min]}] = [${arr[min]}, ${arr[i]}]`);
        }
    }
    console.log("Final: " + arr)
    return arr;
}

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++){
        const currValue = array[i];
        let j = i - 1;
        //Find the correct position for currValue
        while (j >= 0 && array[j] > currValue) {
            array[j + 1] = array[j]; //shift larger value to the right
            j--; //move to the next element on the left
        };
        // Insert currValue at the correct position
        array[j + 1] = currValue;
    }
    return array; // Return the sorted array
};

sortButton.addEventListener("click",sortInputArray);