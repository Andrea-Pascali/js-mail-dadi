// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


//1 lista con numeri da 1 a 6
//chiedere all'utente di scegiere un numero da 1 a 6
//fai in modo che il computer scelga un numero da 1 a 6
//confrontando i due risultati determina il numero più alto
//stampare il vincitore che ha scelto il numero più alto


// 1. Creare una lista di numeri da 1 a 6
const numbers = [1, 2, 3, 4, 5, 6];

// 2. Chiedere all'utente di scegliere un numero da 1 a 6
const userChoice = parseInt(prompt("Scegli un numero da 1 a 6:"));

// Verificare che l'utente abbia scelto un numero valido
if (isNaN(userChoice) || userChoice < 1 || userChoice > 6) {
    alert("Per favore, scegli un numero valido tra 1 e 6.");
} else {
    // 3. Generare un numero random per il computer
    const computerChoice = numbers[Math.floor(Math.random() * numbers.length)];

    // 4. Stampare le scelte
    console.log(`Hai scelto il numero: ${userChoice}`);
    console.log(`Il computer ha scelto il numero: ${computerChoice}`);

    // 5. Confrontare i due risultati per determinare il vincitore
    if (userChoice > computerChoice) {
        console.log("Complimenti, hai vinto!");
    } else if (userChoice < computerChoice) {
        console.log("Peccato, il computer ha vinto!");
    } else {
        console.log("È un pareggio!");
    }
}