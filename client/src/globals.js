import { State } from "./constants.js";

export default
{
    //NO SE SI UTILIZARLO O NO PARA LA CREACION DE OBJETOS
    //Acceso al canvas y context
    canvas: {},
    ctx:{},


    // Inicializamos el estado de juego a Waiting
    gameState: State.WAITING,

    //Tiempo de ciclo anterior
    previousCycleMilliseconds: -1,

    //Tiempo de ciclo de juego real
    deltaTime: 0,

    //Carga de Assets
    assetsToLoad: [],
    assetsLoaded: 0,


    // ===================
    // BUTTONS
    //===================

    //Start
    buttonStart: {},

    // Create Potion
    buttonCreatePotion: {},

    //mouse events
    action:{},

    //Array que recoge toda la informacion del .JSON de ingredientes
    getAllIngredients: [],

    
    // (4 efectos a comporar) - Si los dos ingredientes escogidos al azar tienen un efecto en comun --> El efecto resultante de la pocion sera un efecto comun 
    // Si los dos ingredientes tienen mas de un efecto enm comun el efecto resultante de la pocion sera uno de los que obtenga, a escoger
    // Si los dos ingredientes no tienen nigun efecto en com,un. la pocion resultante sera fallida

    //Array que guarda los ingredientes seleccionados
    selectedIngredients: [],

    //Global que almacena cuantos effecctos en comun hay
    commonIngredientEffect: 0,

    //Global que guarda el nombre del efecto
    effectName: "",
}