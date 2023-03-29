import globals from "./globals";
import { State } from "./constants";

function initHTMLelements()
{
    globals.buttonStart     = document.getElementById('btnStart');
}

export {
    initHTMLelements,
}