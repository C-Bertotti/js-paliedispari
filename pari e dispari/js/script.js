// L’utente sceglie pari o dispari;
do {
    var userEvenOdd = prompt('Scegli tra pari o dispari.');
} while ( userEvenOdd != 'dispari' && userEvenOdd != 'pari' );

// inserisce  un numero da 1 a 5.
do {
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5.'));
} while ( isNaN(userNumber) );

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var randomNumber = getRndInteger(1, 5);

// Sommiamo i due numeri
var sum = 


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto