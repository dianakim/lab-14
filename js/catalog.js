/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  
  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading
  
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  
}

public int RemoveFromCart(int id)
{
    // Get the cart 
    var cartItem = storeDB.Carts.Single(
        cart => cart.CartId == ShoppingCartId
        && cart.RecordId == id);

    int itemCount = 0;

    if (cartItem != null)
    {
        //--if (cartItem.Count > 1)
        //--{
        //--    cartItem.Count--;
        //--    itemCount = cartItem.Count;
        //--}
        //--else
        //--{
            storeDB.Carts.Remove(cartItem);
        //--}
        // Save changes 
        storeDB.SaveChanges();
    }
    return itemCount;
}
// TODO: Add the selected item and quantity to the cart
  // function addSelectedItemToCart() {}
//    TODO: suss out the item picked from the select list
//    TODO: get the quantity
//    TODO: using those, add one item to the Cart
// 


// TODO: Update the cart count in the header nav with the number of items in the Cart
// function updateCounter(e){
//   var Product = e.target.title;
  
//   if(e.target.id === 'product-container'){
//     alert('click a product!');
//   }
  
//   if(votesRemaining === 0){
//     productContainerEl.removeEventListener('click', updateCounter);
//     // render the results to the DOM
//     renderChart();
//   }
  
//   for(var i = 0; i < allProducts.length; i++){
//     if(Product === allProducts[i].name){
//       allProducts[i].votes++;
//       votesRemaining--;
//     }
//   }
//   render();
// }

// productContainerEl.addEventListener('click', updateCounter);

// render();

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();