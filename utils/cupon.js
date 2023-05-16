/** Ejercicio 2: Exporta la función correctamente para que ex2.js la pueda utilizar  */

export default function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  // Comenzamos definiendo la función checkCoupon que toma cuatro parámetros: enteredCode, correctCode, currentDate, y expirationDate. Estos parámetros representan el código que ha introducido el usuario, el código correcto del cupón, la fecha actual, y la fecha de caducidad del cupón, respectivamente.
  let enteredDate = new Date(currentDate);
  //   Convertimos la fecha actual (currentDate) en un objeto de fecha de JavaScript y la almacenamos en la variable enteredDate. Esto nos permitirá compararla con la fecha de caducidad del cupón más tarde.
  expirationDate = new Date(expirationDate);
  //   Convertimos la fecha de caducidad del cupón (expirationDate) en un objeto de fecha de JavaScript y la almacenamos en la variable expirationDate. Esto nos permitirá compararla con la fecha actual más tarde.
  if (enteredCode === correctCode && enteredDate <= expirationDate) {
    // Comprobamos si el código introducido (enteredCode) es igual al código correcto del cupón (correctCode) y si la fecha actual (enteredDate) es anterior o igual a la fecha de caducidad del cupón (expirationDate).
    return true;
    // Si se cumplen ambas condiciones en el paso anterior, devolvemos true porque el cupón es válido.
  }
  // Si alguna de las condiciones no se cumple, es decir, el código introducido no es igual al código correcto del cupón o la fecha actual es posterior a la fecha de caducidad del cupón, entonces ejecutamos el bloque de código dentro de este else.
  return false;
  // Devolvemos false porque el cupón no es válido en este caso.
}

