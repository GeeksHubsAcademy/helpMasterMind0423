

let arrayGanador = [];

//Funcion que genera la combinación ganadora.
const generaGanadora = () => {

    //De forma hardcodeada voy a inventarme los colores posibles...
    let coloresPosibles = ["rojo", "verde", "azul", "amarillo", "rosa", "naranja"];

    for(let i = 0; i < 4; i++){

        let posicionRandom = Math.floor(Math.random() * coloresPosibles.length);

        arrayGanador.push(coloresPosibles[posicionRandom]);
    }

    console.log(coloresPosibles, "estos son los colores posibles...")
    console.log(arrayGanador, "estos son los colores ganadores....")

};

generaGanadora();

let tablero = document.getElementById("tablero");

let dificultad = 10;
let contador = 1;

//Esta parte acaca de ser hardcodeada, es decir, arbitrariamente hemos 
//decidido que tenga una dificultad de tipo fácil, dándole 10 líneas, naturalmente.

const compruebaGanadora = () => {


}

const pintaBola = (numeroDeFila) => {

    console.log("has clickado en la fila.......", numeroDeFila)
}

const pintaTablero = () => {


    compruebaGanadora();

    //Al no haber ganado nadie, el código continúa por aquí debajo...

    if(dificultad > 1){

        document.getElementById(`fila${contador}`).removeAttribute("onclick");

        contador++;

        tablero.innerHTML += `<div id='fila${contador}' class='fila' onclick='pintaBola(${contador})'>${contador}</div>`;

        dificultad -= 1;

    } else {

        console.log("you died!")
    }


}


