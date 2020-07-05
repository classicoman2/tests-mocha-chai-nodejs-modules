

/**
 * Funció que suma 2 nombres. Dóna error de tipus calcErr si els valors passats no són numèrics
 * 
 * @param {*} x 
 * @param {*} y 
 */
function suma(x,y) { 
    
    if ( isNaN(x) || isNaN(y) ) {
      return NaN
    }

    return x + y }


module.exports = {
    suma
}


//Proves que puc realitzar amb la consola

console.log(suma(2,'patata'))