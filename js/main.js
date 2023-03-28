const name = prompt ("Inserisci il tuo nome...");

let age = prompt ("Inserisci la tua età...");

const color = prompt ("Inserisci il tuo colore preferito...");

let number1 = prompt ("Inserisci un numero... ");

let number2 = prompt ("Inserisci un altro numero...")

let division = number1 / number2;

let string = name + age + color + division; 

console.log ( 
`
    ${name}${age}${color}${division}
`
);

document.getElementById ("password").innerHTML = string;


