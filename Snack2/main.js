

let name = ['Paolo','Alessandro','Andrea','Elia','Simone','Yuri']; //Array Nomi
let countName = name.length;

let surname = ['Nicoletti','De Lisi','Magris','De Ceglia','Lega','Lukaku']; //Array cognomi
let countSurname = name.length;

let nameRandom = name[Math.floor(Math.random()* countName)];
let surnameRandom = surname[Math.floor(Math.random()* countSurname)] ;

console.log(nameRandom + ' ' + surnameRandom); 

document.getElementById("lista").innerHTML =  nameRandom + " " + surnameRandom