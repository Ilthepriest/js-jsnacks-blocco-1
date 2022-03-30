const prima_parola = prompt("Inserisci prima parola");

const seconda_parola = prompt("Inserisci seconda parola");



if(prima_parola.length < seconda_parola.length){
    console.log(prima_parola);
    console.log(seconda_parola); 
}

if(prima_parola.length > seconda_parola.length){
    console.log(seconda_parola);
    console.log(prima_parola);
}

if(prima_parola.length == seconda_parola.length){
    console.log("sono uguali");
}