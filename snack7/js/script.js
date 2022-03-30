console.log("Potenze da 0 a 1000");
let potenza = 0;

for (let i = 0; i < 1000; i++) {

    potenza = Math.pow(2,i);

    if(potenza > 1000){
        break
    }

    console.log(potenza);
}