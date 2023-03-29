import globals from "./globals.js";

export function render()
{
    // console.log("entra2");
    renderIngredients();
}

function renderIngredients()
{
    // console.log("entra3");

    //falta meter los numeros random a las i de dentro de los ingredientes
    //Estan echos en esquemas

    for (let i = 0; i < 4; i++)
    {
        // console.log("entraa")
        // globals.getAllIngredients.ingredients.length
        const image     = globals.getAllIngredients.ingredients[i].image;
        const name      = globals.getAllIngredients.ingredients[i].name;
        const effect    = globals.getAllIngredients.ingredients[i].effect;
        const value     = globals.getAllIngredients.ingredients[i].value;
        const weigth    = globals.getAllIngredients.ingredients[i].weigth;

        // console.log(ingredient);

        renderIngredient(name, image, effect, value, weigth);
    }
    
}

function renderIngredient(name, image, effect, value, weigth)
{
    console.log("entra en renderIngredient");

    // IMAGENES - DONE - 4 imagenes
    const img = document.createElement('img');
    img.src = image;
    document.body.appendChild(img);


    // NOMBRES
    const elemento = document.getElementById('ingredientsNames');
    elemento.innerHTML = name;
    
    

    //Effectos
    // for (let i = 0; i < effect.length; i++)
    // {
        const Effecto = document.getElementById('ingredientsEffects');
        Effecto.innerHTML = effect;
    // }

    //Value
    const Valor = document.getElementById('ingredientsValue');
    Valor.innerHTML = "Value: " + value;

    //Weight
    const Peso = document.getElementById('ingredientsWeight');
    Peso.innerHTML = "Weigth: " + weigth;
}



