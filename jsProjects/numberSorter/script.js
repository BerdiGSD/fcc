const sortButton =  document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown")
    ].map((dropdown) => Number(dropdown.value));

    // const sortedValues = bubbleSort(inputValues); // Utilizing bubble sort
    // const sortedValues = selectionSort(inputValues); // Utilizing selection sort
    const sortedValues = insertionSort(inputValues); // Utilizing Insertion sort
    updateUI(sortedValues);
};

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num.value;
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

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++){
        const currValue = array[i];
        let j = i - 1;

    }
};

sortButton.addEventListener("click",sortInputArray);