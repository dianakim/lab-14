function ShoppingCart() {
  this.storedCartItems = [];
  this.getCartItems = function (items) {
    var cartItems = localStorage.getItem('cartItems');
    if(cartItems == null) {
      // No items present in localStorage set the items
      console.log('store in localstorage');
    } else {
      this.storedCartItems = JSON.parse(cartItems);
      console.log(cartItems);
    }
    this.updateCartNumValue();
  };

  this.storeCartItems = function (items) {
    localStorage.setItem('cartItems', JSON.stringify(items));
    this.updateCartNumValue();
  };
  this.getProductList = function (fileName) {
    // Load the product list and pass it into the shopping cart
    loadJSON(function (response) {
      var plist = JSON.parse(response);
      populateProducts(plist);
    }, fileName);
  };

  function populateProducts(list){
    var productListHolder = document.getElementsByClassName('productList')[0];
    Object.keys(list.productList).forEach(function(key) {
      var content =
      '<div class="productListItem">'+
        '<img src="'+list.productList[key].imageFile+'" alt="" class="listImage">'+
        '<div class="productTitle">'+list.productList[key].title+'</div>'+
        '<div class="productDescription">'+list.productList[key].description+'</div>'+
        '<h2 class="productPrice">'+list.productList[key].price+'</h2>'+
        '<button type="button" name="button" onclick="shoppingCart.addToCart('+list.productList[key].id+')">Add to Cart</button>'+
      '</div>';

      productListHolder.innerHTML += content;
    });
  }

  this.updateCartNumValue = function () {
    document.getElementById('itemCount').innerHTML = this.storedCartItems.length;
  };

  this.addToCart = function (id) {
    this.storedCartItems.push(id);
    this.storeCartItems(this.storedCartItems);

  };
}
