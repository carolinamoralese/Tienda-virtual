/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total price
 */
export const totalPrice = (products) => {
    let sum = 0;
  
    if (Array.isArray(products)) {
      products.forEach((product) => (sum += product.price));
    }
  
    return sum;
  };
  