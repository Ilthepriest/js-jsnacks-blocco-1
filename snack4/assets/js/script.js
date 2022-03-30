const invitati_festa_gatsby = ["Luigi", "Marco", "Leonardo"];

const nome = prompt("Dimmi il tuo nome");


let condizione = false;

for (let i = 0; i < invitati_festa_gatsby.length; i++) {
    let elenco = invitati_festa_gatsby[i];

   
    if(elenco == nome){
        condizione = true;  
    }

}

if(condizione == true) {
    console.log("puoi entrare");
}else{
    console.log("non puoi entrare");
}

