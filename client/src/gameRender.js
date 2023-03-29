import globals from "./globals.js";

export function render()
{
    // console.log("entra2");
    renderIngredients();
}

function renderIngredients()
{
    // console.log("entra3");

    for (let i = 0; i < 1; i++)
    {
        // console.log("entraa")
        // globals.getAllIngredients.ingredients.length
        const ingredient = globals.getAllIngredients.ingredients[i];
        console.log(ingredient);
        // renderIngredient(ingredient);
    }
    
}

function renderIngredient(ingredient)
{

    globals.ctx.fillStyle = 'green';
    globals.ctx.fillRect(20, 20, 80, 80);
    globals.ctx.font = '12px arial';
    globals.ctx.fillStyle = 'white';

    globals.ctx.fillText(ingredient.name, 20, 20 + 20);
}



