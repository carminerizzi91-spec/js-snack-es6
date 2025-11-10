// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Dichiarazione dell'array
const squadreDiCalcio = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    }
];


// Generatore numeri random “punti” fatti e “falli subiti”.

for (let i = 0; i < squadreDiCalcio.length; i++) {
    let squadraCorrente= squadreDiCalcio[i];

    let puntiRandom = Math.floor(Math.random() * 100);
    let falliRandom = Math.floor(Math.random() * 100);

    squadraCorrente.puntiFatti = puntiRandom;
    squadraCorrente.falliSubiti = falliRandom;

}

console.log(squadreDiCalcio)