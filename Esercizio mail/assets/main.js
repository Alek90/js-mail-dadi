/*  Chiedere la email dell'utente, confrontarla con quelle ammesse, e mandare a schermo un messaggio relativo all'esito del confronto. */



// Utilizzare un prompt per chiedere la email all'utente.

const user_email = prompt ("Qual'è la tua email?");
// console.log(user_email);

// Variabili utili
let message;
const result = document.getElementById("result")

// Creare un array (?) contenente una serie di email "ammesse" (utilizziamo razze umane Skyrim).

const admitted = [ 
    "nord@skyrim.tm", 
    "redgard@skyrim.tm", 
    "bretone@skyrim.tm", 
    "imperiale@skyrim.tm"
];
// console.log(admitted);

// Confrontare la email dell'utente con quelle presenti nell'array (array.includes costituisce confronto con risultato true/false).

if (admitted.includes(user_email) == true) { // Se il risultato del confronto è true, creo un messaggio coerente e comprensibile
    message = "email ammessa"
}else { // Altrimenti (se il risultato è false/non è true), creo un messaggio coerente e comprensibile
    message = "email rifiutata"
}
// console.log(message);

// Mettere a schermo un messaggio relativo all'esito.

result.innerHTML = message; 