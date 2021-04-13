/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi:
 ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) 
della lista in cui il nuovo utente si trova */

var cognomeUtente = prompt("Inserisci il tuo cognome");
var arrayCognomi = ["Azzurri", "Neri", "Bianco", "Rossi", "Fumagalli", "Gialli", "Gallo", "Zinco","Costanzo", "Arcuri", "Marino", "Sirianni"];
var listaOrdinataCognomi = [];
var minAlfabetico;
var posizioneCognomeUtente;
var elemento;

// Inserisce cognomeUtente nell array
cognomeUtente= cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
arrayCognomi.push(cognomeUtente);

//Ordina l'array
arrayCognomi.sort();

//Stampa l'array ordinato
console.log(arrayCognomi);
elemento=document.getElementById("lista");

// Inietta l'array nel DOM
for (var i = 0; i < arrayCognomi.length; i++) {
    elemento.innerHTML += "<li>" + arrayCognomi[i] +"</li>";
}

//Scrive la posizione "umana" del cognome utente e la inietta nel DOM
var i = 0;
trovato = false;
posizioneCognomeUtente = arrayCognomi.indexOf(cognomeUtente)+1;
console.log("il cognome dell'utente è a posizione " + posizioneCognomeUtente);
document.getElementById("element-position").innerHTML = "La posizione del cognome dell'utente è la " + posizioneCognomeUtente +"°"; 

