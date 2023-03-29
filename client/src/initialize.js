import globals from "./globals.js";
import { State } from "./constants.js";
import { btnStartDown } from "./events.js";

function initHTMLelements()
{
    globals.buttonStart     = document.getElementById('btnStart');
    
    //Context
    // globals.ctx = globals.canvas.getContext('2d');

    //Al pulsar el boton
    globals.buttonStart.addEventListener("mousedown", btnStartDown, false);
}

export {
    initHTMLelements,
}