/**
 * 1. Importa las dos funciones de ./utils/varias-utilidades.js
 */
import { generarNumeroAleatorio } from "./utils/varias-utilidades.js";
import { generarColorAleatorio } from "./utils/varias-utilidades.js";
/**
 * 2. Genera un número aleatorio entre 1 y 10 y muestrálo por consola
 */
console.log(generarNumeroAleatorio(1,10));
/**
 * 3. Genera un color hexadecimal aleatorio
 */
console.log(generarColorAleatorio());