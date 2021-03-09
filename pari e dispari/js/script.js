// L’utente sceglie pari o dispari;
do {
    var userEvenOdd = prompt('Scegli tra pari o dispari.');
} while ( userEvenOdd != 'dispari' && userEvenOdd != 'pari' );

console.log('Hai scelto ' + userEvenOdd + '.');

// inserisce  un numero da 1 a 5.
do {
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5.'));
} while ( isNaN(userNumber) || userNumber < 1 || userNumber > 5 );

console.log('Il numero che hai scelto è ' + userNumber + '.');

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var randomNumber = getRndInteger(1, 5);

console.log('Il numero che il computer ha generato è ' + randomNumber + '.');

// Sommiamo i due numeri
var sum = userNumber + randomNumber;

console.log('La somma dei due numeri è ' + sum + '.');

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isDivisible(number) {
    if (sum % 2 == 0) {
        return 'true';
    }
}

var sumIsDivisible = isDivisible(sum);

// Dichiariamo chi ha vinto
if (sumIsDivisible == 'true' && userEvenOdd == 'pari') {
    console.log('Hai vinto');
} else if (sumIsDivisible != 'true' && userEvenOdd == 'dispari') {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');  
}