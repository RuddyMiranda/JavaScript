const producto4 = 'Monitor 20 pulgadas';


// .Remplace para reemplazar
console.log(producto4);
console.log(producto4.replace('pulgadas', '"'));
console.log(producto4.replace('Monitor', 'Monitor curvo'));

//.slice para cortar
console.log(producto4.slice(0,10));
// console.log(producto4.slice(8));
// console.log(producto4.slice(2, 1));



// Alternativa a Slice

console.log(producto4.substring(0, 10));


const usuario = "Ruddy";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));