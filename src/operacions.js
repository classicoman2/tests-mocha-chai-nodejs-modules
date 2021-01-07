/**
 * Funció que suma 2 nombres. 
 *
 * @param {number} x
 * @param {number} y
 * 
 * @returns {number} with the addition of the operands
 *          {Nan} if any of the operands is not a number
 */
function suma(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return NaN;
  }

  return x + y;
//  return parseFloat(x) + parseFloat(y);
}



// Proves amb CHAI

module.exports = {
  suma, creaArrayDe3
};

function creaArrayDe3(a,b,c) {
  return [a,b,c];
}