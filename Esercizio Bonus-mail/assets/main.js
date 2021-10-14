/*  Chiedere la email dell'utente, confrontarla con quelle ammesse, e mandare a schermo un messaggio relativo all'esito del confronto. */

/* Alternativa Bonus - l'email utente deve essere inserita a schermo in un input. Dopodichè andrà avviato il confronto per mezzo del click su un bottone. Rimane dover mettere a schermo l'esito */


// Selezionare elementi della DOM

const userEmailInputElement = document.getElementById("user_email");
const check = document.getElementById("check");
const result = document.getElementById("result");


// Variabili utili
let message;


// Creare un array (?) contenente una serie di email "ammesse" (utilizziamo razze umane Skyrim).

const admitted = [ 
    "nord@skyrim.tm", 
    "redgard@skyrim.tm", 
    "bretone@skyrim.tm", 
    "imperiale@skyrim.tm"
];



/* Creare una funzione legata ad un bottone per:
    Confrontare la email dell'utente con quelle presenti nell'array (array.includes costituisce confronto con risultato true/false).
*/     

check.addEventListener("click", function() {

    const user_email = userEmailInputElement.value;

    if (admitted.includes(user_email) == true) { 
        // Se il   risultato del confronto è true, creo un messaggio coerente e comprensibile
        message = "email ammessa"
    }else { 
        // Altrimenti (se il risultato è false/non è true), creo un messaggio coerente e comprensibile
        message = "email rifiutata"
    }
    
    // Mettere a schermo un messaggio relativo all'esito.
    
    result.innerHTML = message; 
})    




