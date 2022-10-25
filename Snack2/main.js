

let name = ['Paolo','Alessandro','Andrea','Elia','Simone','Yuri']; //Array Nomi
let countName = name.length;

let surname = ['Nicoletti','De Lisi','Magris','De Ceglia','Lega','Lukaku']; //Array cognomi
let countSurname = name.length;

let nameRandom = name[Math.round(Math.random()*(countName -1))];
let surnameRandom = surname[Math.round(Math.random()*(countSurname -1))] ;

console.log(nameRandom + ' ' + surnameRandom); 

document.getElementById("lista").innerHTML =  nameRandom + " " + surnameRandom