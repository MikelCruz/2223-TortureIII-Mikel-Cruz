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
    

    for (let i = 8; i < 12; i++)
    {
        // let randomNum
        // Math.floor(Math.random(randomNum) + i)
        // console.log("entraa")
        // globals.getAllIngredients.ingredients.length
        const image     = globals.getAllIngredients.ingredients[i].image;
        const name      = globals.getAllIngredients.ingredients[i].name;
        const effect    = globals.getAllIngredients.ingredients[i].effects;
        const value     = globals.getAllIngredients.ingredients[i].value;
        const weigth    = globals.getAllIngredients.ingredients[i].weight;

        // console.log(ingredient);

        renderIngredient(name, image, effect, value, weigth);

        //Guardamos el ingrediente en un array de ingredientes (4 en total).
        const SelectedIngredient = [image, name, effect, value, weigth];
        globals.selectedIngredients.push(SelectedIngredient)
    }
    
}

function renderIngredient(name, image, effect, value, weigth)
{
    //Mejor utilizar AppendChild en todo 

    console.log("entra en renderIngredient");

    // IMAGENES - DONE - 4 imagenes
    // const img = document.createElement('img');
    const img = new Image();
    img.src = image;
    document.getElementById('ingredientsImages').appendChild(img);
    
    //Para agregarlo con innerHTML
    // document.getElementById("ID_del_div").innerHTML='<img src="./direccion_imagen.jpg" />';

    // Names
    // const elemento2 = document.createElement('p');
    // let Name = document.createElement('H3');
    // Name = name;
    // document.getElementById('ingredientsNames').innerHTML = name;
    document.getElementById('ingredientsEffects').innerHTML='<h1 " ABICHUELAAA" />';
    
    // Element
    const elemento = document.getElementById('ingredientsNames');
    elemento.innerHTML = name;
    
    // Efect
    const Effecto = document.getElementById('ingredientsEffects');
    Effecto.innerHTML = effect;
    

    // Value
    const Valor = document.getElementById('ingredientsValue');
    Valor.innerHTML = "Value: " + value;

    // Weight
    const Peso = document.getElementById('ingredientsWeight');
    Peso.innerHTML = "Weigth: " + weigth;
}



