let randomUser = Math.floor(Math.random() * 6 + 1);
const userThrow = randomUser;
let randomPc = Math.floor(Math.random() * 6 + 1);
const pcThrow = randomPc;
let winnerMessage;



if (userThrow > pcThrow) {
    winnerMessage = "Ha vinto l'umano"
else if (userThrow < pcThrow)
    winnerMessage = "Ha vinto la macchina"
}
document.getElementById("message").innerHTML = winnerMessage;