//In base al numero inserito stampa tot cubi (esempio se
//inserisco 5 avrò in output 5 cubi)

  const numero_inserito = Number(prompt("Inserisci numero"));

  console.log(`Cubi di numeri scelti dall'utente`);

  for (let i = 1; i <= numero_inserito; i++) {
      let cubi = Math.pow(i, 3);

      console.log(`${i} ${cubi}`);
  }

//Cubo di un numero

 const inserisciNumero = Number(prompt("Inserisci numero"));

 const cubo = Math.pow(inserisciNumero, 3);

 console.log(`Il cubo di ${inserisciNumero} è ${cubo}`);


//Cubi possibili fino al numero inserito dall'utente

 const number_inserito = Number(prompt("Inserisci numero"));

  for (let i = 1; i <= number_inserito; i++) {

    let cubi = Math.pow(i, 3);

    if(cubi > number_inserito){
        break
    }
    
    console.log(`${i} ${cubi}`);
  }