// import { initEvents, initHTMLelements, initVars, loadAssets,  } from "./initialize.js";

import {initHTMLelements} from "./initialize.js";
import globals from "./globals.js";
import { State } from "./constants.js";

// GAME INIT

window.onload = init;

function init()
{
    initHTMLelements();

    // loadAssets();

    // initEvents();

    // initVars();

}

function gameLoop(timeStamp)
{
    // console.log("gameloop");
    //Keep requesting new frames

    //Tiempo real de ciclo de ejecución 
    const elapsedCycleSeconds = (timeStamp - globals.previousCycleMilliseconds) / 1000;

    //Tiempo anterior de ciclo de ejecución
    globals.previousCycleMilliseconds = timeStamp;

    //Variable que corrige el tiempo de frame debido a retrasos con respecto al tiempo objetivo (frameTimeObj)
    globals.deltaTime += elapsedCycleSeconds;
    // console.log(globals.deltaTime);

    if(globals.deltaTime >= globals.frameTimeObj)
    {
        update();

        //Render que Utilizare más adelante para dibujar las imagenes 
        // render();


        globals.deltaTime -= globals.frameTimeObj;
    }

    if(globals.gameState === State.MAKING)
    {
        console.log("GameState Making"),
        requestAnimationFrame(gameLoop);
    }

    else
        cancelAnimationFrame(gameLoop);

}

export 
{
    gameLoop
}