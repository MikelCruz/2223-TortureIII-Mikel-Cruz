import { gameLoop } from "./game.js";

export function btnStartDown ()
{
    console.log("Se pulsa el boton");

    // Ocultamos el boton start
    globals.buttonStart.style.visibility = "Hidden";

    document.getElementById('sectionStart').style.display = "none";

    requestAnimationFrame(gameLoop);
}
