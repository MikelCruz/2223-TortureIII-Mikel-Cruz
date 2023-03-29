import globals from "./globals.js";
import { State } from "./constants.js";
import { btnStartDown, btnCreationOfPotions, canvasMouseupHandler, canvasMousedownHandler } from "./events.js";

function initHTMLelements()
{
    globals.buttonStart         = document.getElementById('btnStart');
    globals.buttonCreatePotion  = document.getElementById('btnCreatePotion');


    //Context
    // globals.ctx = globals.canvas.getContext('2d');

    //Inicializamos el boton de Create Potion a oculto
    globals.buttonCreatePotion.style.visibility = "Hidden";

    //Ocultamos el div De Pociones para más adelanto sacarlo
    document.getElementById('divPotion').style.display = "none";


    //Al pulsar el boton
    globals.buttonStart.addEventListener("mousedown", btnStartDown, false);
    globals.buttonCreatePotion.addEventListener("mousedown", btnCreationOfPotions, false);
}

function initVars()
{
    //Inicializamos las variables de gestión de tiempo
    // globals.previousCycleMilliseconds = 0;
    // globals.deltaTime = 0;
    // globals.frameTimeObj = 1 / FPS; //Frame time in seconds

    //Inicializamos el estado del juego
    globals.gameState = State.WAITING;

    //Inicializamos los estados de las acciones
    globals.action = {
        mousePressed: false
    };
}

// function initEvents()
// {

// }

export {
    initHTMLelements,
    initVars,
    // initEvents,
}