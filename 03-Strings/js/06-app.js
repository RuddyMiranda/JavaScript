const producto4 = 'Monitor 20 pulgadas';


// .repeat te permite repetir una cadena de texto...

const texto = ' en Promoción'.repeat(2);

console.log(texto);
console.log(`${producto4} ${texto} !!!!`)


// Split, dividir string

const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModerno";
console.log(tweet.split('#'));