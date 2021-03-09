// Chiedere all’utente di inserire una parola
var userWord = prompt('Inserisci una parola');

// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word) {
    //Creo i cicli che mi servono per analizzare la parola
    // da sx verso dx
    var wordRtoL = "";
    for ( var y = userWord.length - 1; y >= 0; y-- ) {
        wordRtoL += userWord[y];
    }

    //Ritorno un risultato
    if (userWord == wordRtoL) {
        return 'true';
    }
}

//Creo la variabile nella quale invoco la funzione
var result = isPalindrome(userWord);

//Stampo il risultato
if (result == 'true') {
    console.log('La parola ' + userWord + ' è palindroma');
} else {
    console.log('La parola ' + userWord + ' NON è palindroma, riprova.')
}

    