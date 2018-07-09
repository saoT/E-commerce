function addToCart (name, year, stock, price, id) {
  console.log(name, year, stock, price, id);

  var newProduct = {
    name : name,
    year : year,
    stock : stock,
    price : price,
    id : id
  }

  // var cart = localStorage.getItem('cart');
  // if (!cart) cart = [];



  var localSTRING = localStorage.getItem('cart');
  var localJSON = JSON.parse(localSTRING);

  // IF CART EXISTS in localStorage use it, otherwise create it.
  var cart = localJSON || [];

  var newProductSTRING = JSON.stringify(newProduct);
  cart.push(newProductSTRING);

  var cartSTRING = JSON.stringify(cart);
  localStorage.setItem('cart', cartSTRING);

}


function displayCart () {

  var cart = JSON.parse(localStorage.getItem('cart'));

  for ( product of cart ) {
    productJSON = JSON.parse(product)
    console.log( productJSON.name )
  }
}

displayCart();