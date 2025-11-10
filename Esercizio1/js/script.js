// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

// Dichiarazione dell'array contenente gli oggetti (le bici)
const biciDaCorsa = [
    {
        nome: "Specialized Tarmac SL8",
        peso: 6.9 // Peso in kg
    },
    {
        nome: "Pinarello Dogma F",
        peso: 7.0
    },
    {
        nome: "Cannondale SuperSix EVO",
        peso: 6.8
    },
    {
        nome: "Trek Madone SL",
        peso: 7.3
    },
    {
        nome: "Giant TCR Advanced Pro",
        peso: 6.85
    }
];

let biciCorente;
let biciLeggera = biciDaCorsa[0];

for (let i = 0; i < biciDaCorsa.length; i++) {
    biciCorente = biciDaCorsa[i]

    if (biciCorente.peso < biciLeggera.peso) {
        biciLeggera = biciCorente
    }
}

console.log(biciLeggera)