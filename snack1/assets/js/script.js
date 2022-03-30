const primo_numero = Number(prompt("Inserisci primo numero"));

console.log(primo_numero);

const secondo_numero = Number(prompt("Inserisci secondo numero"));

console.log(secondo_numero);

if(primo_numero > secondo_numero){
    console.log(`è maggiore ${primo_numero}`);
}else if(primo_numero == secondo_numero){
    console.log(`è uguale ${secondo_numero}`);
}else{
    console.log(`è maggiore ${secondo_numero}`);
}


