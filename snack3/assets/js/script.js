
const lista = [];
for (let i = 1; i <= 3; i++) {

    let inserisci_10_numeri = Number(prompt(`Inserisci numero ${i}`));
    
    lista.push(inserisci_10_numeri);
    ciao()
    
   
}



function ciao(){
    let somma = 0;
    for (let i = 0; i < lista.length; i++) {
        somma += lista[i];

         
    
    }
console.log(`Questa è la somma ${somma}`);    
    
}

