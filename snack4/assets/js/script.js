const invitati_festa_gatsby = ["Luigi", "Marco", "Leonardo"];

const nome = prompt("Dimmi il tuo nome");


let entra = false

for (let i = 0; i < invitati_festa_gatsby.length; i++) {
    let entra = invitati_festa_gatsby[i];

   
    if(entra == nome){
        
        entra = true; 

        
    }else{
        
        entra = false
    }

    if (entra) {
        console.log("puoi entrare");
    }else{
        console.log("non puoi entrare");
    }

    
}

