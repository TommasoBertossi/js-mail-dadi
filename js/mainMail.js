const mailUsers = ["pippo@mail.com", "pluto@mail.com", "paperino@mail.com"];
let mailUser = "";
const mailCheck = prompt("Inserisci qui la tua mail");
let mailMessage;

for (let i = 0; (i <= mailUsers.length + 1 && mailUser != mailCheck); i++) {
    mailUser = mailUsers[i];
    if (mailUser == mailCheck) {
        document.getElementById("mail-message").innerHTML = "Benvenuto Utente";
    }
    if (i == mailUsers.length + 1) {
        document.getElementById("mail-message").innerHTML = "Accesso non autorizzato";
    }
}