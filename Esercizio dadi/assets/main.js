/* Generare numero random sia per il giocatore che per il computer.
Stabilire il vincitore sulla base del risultato più alto. */



// Variabili

const gambleBtnElmt = document.getElementById("gamble");
const result = document.getElementById("result");
let player_num;
let pc_num;
let message;



// Quando inizia l'azione?  Crea bottone per attivare.

// Attivando l'azione si generano 2 numeri random da 1 a 6

gambleBtnElmt.addEventListener("click", function() {

    // genera numero random giocatore
    let player_num = Math.floor(Math.random() * 5) + 1;

    // genera numero random pc
    let pc_num = Math.floor(Math.random() * 5) + 1;
    

    // Costituisco le condizioni che determinano il vincitore.

    if (player_num > pc_num) { // se num-giocatore > num-pc = giocatore vince
        message = "You win";
    }else if (player_num < pc_num) { // se num-giocatore < num-pc = giocatore perde
        message = "You lose";
    }else {  // altrimenti pareggiano
        message = "Equal";
    };


    // Restituisco un messaggio con il risultato.

    result.innerHTML = message;

})
