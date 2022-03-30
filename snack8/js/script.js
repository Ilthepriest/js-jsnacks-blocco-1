const numero_4_cifre = String(prompt("Inserisci un numero di 4 cifre"));

let somma = 0;

for (let i = 0; i < numero_4_cifre.length; i++) {
    const numero = numero_4_cifre[i];

    somma += Number(numero);    
}

console.log(somma);