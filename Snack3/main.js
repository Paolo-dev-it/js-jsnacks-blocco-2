let numbers = [1, 2, 3, 4, 5, 6, 7]; //Array numeri

let somma = 0; //Variabile 0 da sommare

for(let i = 1; i < numbers.length; i += 2 ){ //Ciclo 

    somma += numbers[i]; //Somma = 0 da sommare con i numeri nella posizione dispari dell'array
    console.log(somma)
    document.getElementById("text").innerHTML =  somma

}

