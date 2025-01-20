const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn")
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};

const removeSpecialChars = (val) => {
    return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
}
/** My attempt to line 16 */
// function removeSpecialChars () {
//     if (typeof str !== "string") {
//         throw new Error("Input must be a string")
//     }
//     return str.replace(/[^a-zA-Z0-9 ]/g, "");
// }

const addOrUpdateTask = () => {
    if (!titleInput.value.trim()){
        alert("Please provide a title");
        return;
    }
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
        id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: removeSpecialChars(titleInput.value),
        date: dateInput.value,
        description: removeSpecialChars(descriptionInput.value)
    }

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[dataArrIndex] = taskObj;
    }
    
    localStorage.setItem("data",JSON.stringify(taskData));
    updateTaskContainer();
    reset();
};

const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";

    taskData.forEach(
        ({id, title, date, description}) => {
            (tasksContainer.innerHTML += ` 
            <div class="task" id="${id}">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Description:</strong> ${description}</p>
                <button onclick="editTask(this)" type="button" class="btn">Edit</button>
                <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
            </div>
            `)
        }
    );
};


const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item)=> item.id === buttonEl.parentElement.id
    );

    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem("data",JSON.stringify(taskData));
}

const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    currentTask = taskData[dataArrIndex];
    
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");
}

const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
};

if(taskData.length) {
    updateTaskContainer()
}
openTaskFormBtn.addEventListener("click", () => 
    taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal();
    } else {
        reset(); 
    }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset();
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addOrUpdateTask();
});

// Step 60
// Remove the myTaskArr array and all of the code for localStorage because you
// don't need them anymore.

// const myTaskArr = [
//     { task: "Walk the Dog", date: "22-04-2022" },
//     { task: "Read some books", date: "02-11-2023" },
//     { task: "Watch football", date: "10-08-2021" },
// ];

// localStorage.setItem("data",JSON.stringify(myTaskArr));

// Using localStorage.clear() won't just delete a single item from local storage
// but will remove all items. 
// localStorage.removeItem("data");
// localStorage.clear();

// const getTaskArr = localStorage.getItem("data");
// console.log(getTaskArr);

// const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
// console.log(getTaskArrObj);