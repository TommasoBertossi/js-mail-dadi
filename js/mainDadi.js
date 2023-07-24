// let randomUser = Math.floor(Math.random() * 6 + 1);
let userThrow = Math.floor(Math.random() * 6 + 1);
// let randomPc = Math.floor(Math.random() * 6 + 1);
let pcThrow = Math.floor(Math.random() * 6 + 1);
let winnerMessage;
console.log(userThrow, pcThrow);

while (userThrow == pcThrow) {
    winnerMessage = "Facciamo un altro giro"
    document.getElementById("message").innerHTML = winnerMessage;
    userThrow = Math.floor(Math.random() * 6 + 1);
    pcThrow = Math.floor(Math.random() * 6 + 1);
}

if (userThrow > pcThrow) {
    winnerMessage = "Ha vinto l'umano";
    }else {
    winnerMessage = "Ha vinto la macchina";
}
document.getElementById("message").innerHTML = winnerMessage;