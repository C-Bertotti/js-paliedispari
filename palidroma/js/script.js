// Chiedere all’utente di inserire una parola
var userWord = prompt('Inserisci una parola');

// Creo le variabili per la parola analizzata;
var wordLtoR = [];
var wordRtoL = [];
// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word) {
    //Creo i cicli che mi servono per analizzare la parola
    // da sx verso dx
    for ( var y = userWord.length; y > 0; y-- ) {
        wordLtoR.push(userWord[y]);
    }

    // da dx verso sx
    for ( var i = 0; i < userWord.length; i++ ) {
        wordRtoL.push(userWord[i]);
    }

    //Ritorno un risultato
    if (wordLtoR == wordRtoL) {
        return 'true';
    }
}

//Creo la variabile nella quale invoco la funzione
var result = isPalindrome(userWord);

//Stampo il risultato
if (result = 'true') {
    console.log('La parola ' + userWord + ' è palindroma');
} else {
    console.log('La parola ' + userWord + ' NON è palindroma, riprova.')
}

    