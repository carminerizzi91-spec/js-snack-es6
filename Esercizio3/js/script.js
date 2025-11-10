// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS 


function estraiElementi(array, a, b) {
    let nuovoArray = [];

    for (let i = a; i <= b; i++) {
        if (i < array.length) {
            let posizioneNuovoArray = i - a;
            nuovoArray[posizioneNuovoArray] = array[i];
        }
    }

    return nuovoArray;
}

const arrayOriginale = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const indiceA = 2; 
const indiceB = 5; 

const arrayEstratto = estraiElementi(arrayOriginale, indiceA, indiceB);

console.log(arrayEstratto);