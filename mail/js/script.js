// Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull’esito del controllo



// Lista delle email autorizzate
const allowedEmails = ["mario@example.com", "luigi@example.com", "alessandro@example.com", "chiara@example.com"];

// Chiedere all'utente la sua email
const userEmail = prompt("Inserisci la tua email per accedere:");

// Variabile per tenere traccia dell'accesso
let isAllowed = false;

// Controllare manualmente se l'email è nella lista
for (let i = 0; i < allowedEmails.length; i++) {
    if (allowedEmails[i] === userEmail) {
        isAllowed = true; // Imposta la variabile su true se c'è una corrispondenza
        break; // Interrompi il ciclo perché abbiamo trovato l'email
    }
}

// Stampare un messaggio appropriato
if (isAllowed) {
    console.log("Accesso consentito! Benvenuto.");
} else {
    console.log("Accesso negato. La tua email non è autorizzata.");
}