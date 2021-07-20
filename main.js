

let A = true;
let B = true;

let tabla = document.querySelector("#myTabla");
tabla.innerHTML = `
    <tr>
        <td>${false}</td>
        <td>${false}</td>
        <td>${false && false}</td>
    </tr>
    <tr>
        <td>${false}</td>
        <td>${true}</td>
        <td>${false && true}</td>
    </tr>
    <tr>
        <td>${true}</td>
        <td>${false}</td>
        <td>${true && false}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>

`;









// let vasoPlastico = true;
// let cafeSinAzucar = false;
// console.log(vasoPlastico && cafeSinAzucar);




// let resultado = 5>3;
// let resultado2 = 5>=5;
// console.log(`Valor de la variable resultado:`,resultado,` y valor de la variable resultado2:`,resultado2);
// console.log(resultado,` && `,resultado2,` = `,(resultado && resultado2));