const vuoto = [];

for (let i = 1; i <= 6; i++) {
    const inserisci_numero = Number(prompt(`Inserisci numero ${i}`))
    
    if(inserisci_numero % 2 !== 1){

    }else{
        vuoto.push(inserisci_numero);
    }
 
}

console.log(vuoto);