/*  Chiedere la email dell'utente, confrontarla con quelle ammesse, e mandare a schermo un messaggio relativo all'esito del confronto. */

/* Aggiungere bonus - l'email utente deve essere mandata a schermo in un input. Dopodichè andrà avviato il confronto per mezzo del click su un bottone. Rimane dover mettere a schermo l'esito */


// Utilizzare un prompt per chiedere la email all'utente.

const user_email = prompt ("Qual'è la tua email?");
console.log(user_email);

let message;

// Mettere a schermo in un input la email.

// Creare un array (?) contenente una serie di email "ammesse" (utilizziamo razze umane Skyrim).

const admitted = [ 
    "nord@skyrim.tm", 
    "redgard@skyrim.tm", 
    "bretone@skyrim.tm", 
    "imperiale@skyrim.tm"
];
console.log(admitted);

// Confrontare la email dell'utente con quelle presenti nell'array (è stato accennato nella lezione).

if (admitted.includes(user_email) == true) {
    message = "email ammessa"
}else {
    message = "email rifiutata"
}
console.log(message);

/*Creare una funzione legata ad un bottone per:

    Confrontare la email dell'utente con quelle presenti nell'array (è stato accennato nella lezione).



    Mettere a schermo un messaggio relativo all'esito.
 */