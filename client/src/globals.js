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
}