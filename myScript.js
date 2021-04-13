/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi:
 ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) 
della lista in cui il nuovo utente si trova */

var cognomeUtente = prompt("Inserisci il tuo cognome");
var arrayCognomi = ["Azzurri","Neri", "Bianco", "Rossi", "Fumagalli", "Gialli", "Gallo","Zinco"];
var listaOrdinataCognomi = [];
var minAlfabetico;
// Inserisce cognomeUtente nell array
arrayCognomi.push(cognomeUtente);
arrayCognomi.sort(); //Ordina l'array
console.log(arrayCognomi);

