import { gameLoop } from "./game.js";
import globals from "./globals.js";
import { State } from "./constants.js";

//Boton Start
function btnStartDown ()
{
    console.log("boton Start pulsado");

    //cambiamos el estado de juego a Making
    globals.gameState = State.MAKING;

    // Ocultamos el boton start
    globals.buttonStart.style.visibility = "Hidden";

    document.getElementById('sectionStart').style.display = "none";

    requestAnimationFrame(gameLoop);
}


//Funcion del mouse
function canvasMousedownHandler()
{
    globals.action.mousePressed = true;
}

function canvasMouseupHandler(event)
{
    globals.action.mousePressed = false;
}




export{
    btnStartDown,
    canvasMousedownHandler,
    canvasMouseupHandler,
}