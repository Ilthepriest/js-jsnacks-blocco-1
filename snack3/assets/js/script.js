//SOLUZIONE COMPLESSA PROVATA IN MATTINATA


// const lista = [];

// let somma = 0

// for (let i = 1; i <= 3; i++) {

//     let inserisci_10_numeri = Number(prompt(`Inserisci numero ${i}`));
    
//     lista.push(inserisci_10_numeri);
//     addizione()
// }


// function addizione(){
    
//     for (let i = 1; i < lista.length; i++) {
//         somma =  somma + lista[i];
//     }
// }

// console.log(`Questa è la somma ${somma}`);

//-------------------------------------------------------------------------------------------------------------

//SOLUZIONE SEMPLICE AGGIORNATA NEL POMERIGGIO


let somma = 0;

for (let i = 1; i <=10 ; i++) {

    const richiedo_10_numeri = Number(prompt(`Inserisci numero ${i}`))

    somma += richiedo_10_numeri;
}

console.log(`La somma è ${somma}`);