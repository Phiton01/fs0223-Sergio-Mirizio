/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
  return l1 * l2;
}

const lunghezza = 5;
const larghezza = 8;

const areaRettangolo = area(lunghezza, larghezza);

console.log(areaRettangolo);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}

const numero1 = 5;
const numero2 = 8;

const risultato1 = crazySum(numero1, numero2);

console.log(risultato1);
const numero3 = 4;
const numero4 = 4;

const risultato2 = crazySum(numero3, numero4);

console.log(risultato2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
  const differenza = Math.abs(numero - 19);
  if (numero > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}

const nume1 = 10;
const nume2 = 25;

console.log(crazyDiff(nume1));
console.log(crazyDiff(nume2));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
const num1 = 50;
const num2 = 200;
const num3 = 400;

console.log(boundary(num1));
console.log(boundary(num2));
console.log(boundary(num3));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
  if (numero > 0 && (numero % 3 === 0 || numero % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

const numer1 = 21;
const numer2 = 35;
const numer3 = 8;

console.log(check3and7(numer1));
console.log(check3and7(numer2));
console.log(check3and7(numer3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  return stringa.split("").reverse().join("");
}

const stringa1 = "EPICODE";

console.log(reverseString(stringa1));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {
  const parole = stringa.split(" ");
  const paroleMaiuscole = parole.map(parola => parola.charAt(0).toUpperCase() + parola.slice(1));
  return paroleMaiuscole.join(" ");
}

const stringa = "ciao a tutti e benvenuti nel mondo della programmazione";

console.log(upperFirst(stringa));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
  return stringa.slice(1, -1);
}

const frase = "questa è una stringa di prova";

console.log(cutString(frase)); 

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const numeriCasuali = [];
  for (let i = 0; i < n; i++) {
    numeriCasuali.push(Math.floor(Math.random() * 11));
  }
  return numeriCasuali;
}

const n = 5;

console.log(giveMeRandom(n));