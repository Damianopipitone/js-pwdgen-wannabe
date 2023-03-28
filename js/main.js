const name = prompt ("Inserisci il tuo nome...");

const surname = prompt ("Inserisci il tuo cognome...")

let age = prompt ("Inserisci la tua età...");

const color = prompt ("Inserisci il tuo colore preferito...");

let number1 = prompt ("Inserisci un numero... ");

let number2 = prompt ("Inserisci un altro numero...")

let division = number1 / number2;

let string = name + surname + age + color + division; 

console.log ( 
`
    ${name}${surname}${age}${color}${division}
`
);

document.getElementById ("password").innerHTML = string;


