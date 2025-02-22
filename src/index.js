// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;


  const subtotal = price * quantity;

  let subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = subtotal;


  return subtotal
  //... your code goes here
}

function calculateAll() {


  let multipleProduct = document.getElementsByClassName(`product`);


  let totalProduct = 0;

  for (let i = 0; i < multipleProduct.length; i++) {
    totalProduct += updateSubtotal(multipleProduct[i])

  }
  let total = document.querySelector('#total-value span');

  total.innerHTML = totalProduct;


}
// Esto seria tranformandolo en una Array y poder aplicar el .forEach
// const multipleProduct = Array.from(document.getElementsByClassName('product'));
// multipleProduct.forEach( (product) => {
//   updateSubtotal(product);
// });

// code in the following two lines is added just for testing purposes.
// // it runs when only iteration 1 is completed. at later point, it can be removed.
// // end of test

// ITERATION 2
//... your code goes here


// ITERATION 3
//... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
