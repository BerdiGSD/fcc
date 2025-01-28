const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /p[li][e3][a@4][s5][e3] h[e3][l1]p|[a@4][s5][s5][i1l][s5][t7[] m[e3]/i; //please help or assist me regex
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars|usd/i; //dollar amount regex
const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i; // free money regex
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i; // stock alert regex
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i; // dear friend regex

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

const isSpam = (msg) => denyList.some(regex => regex.test(msg));

checkMessageButton.addEventListener("click",() => {
    msgEventListener();
});

messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") msgEventListener();
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