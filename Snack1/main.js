

let number = parseInt(prompt("scrivi un numero")); //Input numero dell'utente

    if(number % 2 === 0) { //Condizione che mi dice se il numero è pari
        document.getElementById("text").innerHTML = `Il tuo numero è : ${number}` 
    } else { //Condizione che mi dice se il numero è dispari
        document.getElementById("text").innerHTML = `Il tuo numero è : ${number +  1}`
    }