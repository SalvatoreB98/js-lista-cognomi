/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi:
 ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) 
della lista in cui il nuovo utente si trova */

var cognomeUtente = prompt("Inserisci il tuo cognome");
var arrayCognomi = ["Azzurri", "Neri", "Bianco", "Rossi", "Fumagalli", "Gialli", "Gallo", "Zinco"];
var listaOrdinataCognomi = [];
var minAlfabetico;
var posizioneCognomeUtente;

// Inserisce cognomeUtente nell array
arrayCognomi.push(cognomeUtente);

//Ordina l'array
arrayCognomi.sort();

//Stampa l'array ordinato
console.log(arrayCognomi);

//Scrive la posizione "umana" del cognome utente
var i = 0;
trovato = false;
posizioneCognomeUtente = arrayCognomi.indexOf(cognomeUtente)+1;
console.log("il cognome dell'utente è a posizione " + posizioneCognomeUtente);

