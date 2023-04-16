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

    createPotion();
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


function createPotion()
{
    //FALTA RENDERIZARLOS Y QUE LOS INGREDIENTES DE LA FUNCION SEAN ALEATORIOS (Aleatorios a la hora de seleccionarlos)

    const numRandom1 = Math.floor(Math.random() * 4 +1)
    const numRandom2 = Math.floor(Math.random() * 4 +1)

    const ingrediente1 = globals.selectedIngredients[numRandom1];
    const ingrediente2 = globals.selectedIngredients[numRandom2];
    const effect = 2;

    //Tienen hasta 4 effectos
    // console.log(ingrediente1[effect][1]);
    console.log(globals.selectedIngredients)

    //Comprobamos todos los efectos para ver si tienen alguno en comun
    for(let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            if (ingrediente1[effect][i] === ingrediente2[effect][j])
            {
                // console.log("entra en la funcion");
                //Contador para ver cauntos ingredientes en comun tienen
                globals.commonIngredientEffect++;
                globals.effectName = ingrediente1[effect][i]
                // console.log(globals.commonIngredientEffect);
            }
        }
    }

    //Si los dos ingredientes tienen1 efecto en comun 
    if (globals.commonIngredientEffect > 1)
    {
        // console.log("Tienen: " + globals.commonIngredientEffect + " Efectos en común")
        globals.commonIngredientEffect = 0 //Reiniciamos el valor
        console.log("Potion of " + globals.effectName);
        globals.globals.effectName = ""; //Reiniciamos el valor 
        //FALTA EL RENDER
    }

    //Si los dos ingredientes tienen mas de un efecto en comun 
    else if (globals.commonIngredientEffect > 1)
    {
        // console.log("Tiene: " + globals.commonIngredientEffect + " Efecto en común");
        globals.commonIngredientEffect = 0 //Reiniciamos el valor
        console.log("Potion of " + globals.effectName); 
        globals.globals.effectName = ""; //Reiniciamos el valor
        //FALTA EL RENDER
    }

    //Si los ingredientes no tienen efectos en comun
    else
    {
        console.log("no Tiene efectos en común ")
        //PONER QUE LA POCION HA SIDO FALLIDA
    }
}



export{
    btnStartDown,
    canvasMousedownHandler,
    canvasMouseupHandler,
    btnCreationOfPotions,
}