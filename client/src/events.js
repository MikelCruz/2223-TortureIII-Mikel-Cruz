import globals from "./globals.js";
import { State } from "./constants.js";
import { render } from "./gameRender.js";

//Boton Start
function btnStartDown ()
{
    console.log("boton Start pulsado");

    //cambiamos el estado de juego a Making
    globals.gameState = State.MAKING;

    // Ocultamos el boton start
    globals.buttonStart.style.visibility = "Hidden";
    globals.buttonCreatePotion.style.visibility = "visible";

    // document.getElementById('divPotion').style.display = "block";

    document.getElementById('sectionStart').style.display = "none";

    // al pulsar el boton se llama al get de toda la informacion de las pociones
    getAllIngredients();

    document.getElementById('divPotion').style.display = "block";

}

function btnCreationOfPotions()
{
    console.log("Se pulsa creacion");

    
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


function getAllIngredients()
{
    // console.log("entra en getAllUsers");
    const url = "https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json";
    const request = new XMLHttpRequest();

    request.onreadystatechange = function()
    {

        if (this.readyState == 4)
        {
            if(this.status == 200)
            {
                if (this.responseText != null)
                {
                    // console.log(this.responseText);
                    const resultJSON = JSON.parse(this.responseText);
                    // console.log(resultJSON);

                    //Guardamos los datos del resultJSON
                    globals.getAllIngredients = resultJSON;
                    // console.log(globals.getAllIngredients.ingredients);
                    // console.log(globals.getAllIngredients.ingredients[0].value);
                    
                    render();
                }
                else  
                    alert("Comunication error: No data received");
            }
            else 
                alert ( "Communication error: " + this.statusText);
        }
    }
    request.open ('GET', url, true);
    request.responseType = "text";
    request.send();
}



export{
    btnStartDown,
    canvasMousedownHandler,
    canvasMouseupHandler,
    btnCreationOfPotions,
}