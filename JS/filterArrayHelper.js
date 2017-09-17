var products = [
  {name: 'apple', type: 'fruit',price:299},
  {name: 'banana', type: 'fruit', price:199 },
  {name: 'tomato', type: 'vegetable',price:99},
  {name: 'pineapple', type: 'fruit',price:499},
  {name: 'potato', type: 'vegetable',price:699},
  {name: 'radish', type: 'vegetable',price:399},
  {name: 'carrot', type: 'vegetable',price:99},
  {name: 'orange', type: 'fruit',price:999},
  {name: 'litchi', type: 'fruit',price:1999}
]

var store = {
    type: 'fruit', Availability:'Yes'
}

var filteredProducts = [];
// traditional way

for (var i = 0; i < products.length; i++) {
  if(products[i].type === 'fruit'){
      // Not mutating the products array
    filteredProducts.push(products[i])
  }
}



console.log(filteredProducts);

// Filter Array helper function
var vegetableFilter = products.filter(function(product){
    return product.type === 'vegetable'
});
console.log(vegetableFilter);

var vegetablePriceFilter = products.filter(function(product){
    return product.type === 'vegetable' && product.price > 500
});

console.log(vegetablePriceFilter);

// Filtering multiple params

function multiFilter(products,store) {
    return products.filter(function(product){
      return product.type === store.type
        console.log(product.type === store.type)
    });
};

multiFilter(products,store)
