const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me/i;
// const isSpam = (msg) => msg.match(helpRegex);
const isSpam = (msg) => helpRegex.test(msg); 
//Instead of using the .match() method, you can use the .test() method of a
//regular expression to test if a string matches the pattern.
const denyList = [helpRegex];

checkMessageButton.addEventListener("click",() => {
    msgEventListener();
});

messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        msgEventListener()
    };
});

const msgEventListener = () => {
    if (messageInput.value === "" ) {
        alert("Please enter a message.");
        return;
    }
    result.textContent = isSpam(messageInput.value) ? 
        "Oh no! This looks like a spam message." : 
        "This message does not seem to contain any spam."
    
    messageInput.value = "";
};