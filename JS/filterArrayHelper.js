/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-09-17T19:30:05+05:30
 * @Project: Retailstore-Attendance-Monitor
 * @Filename: filterArrayHelper.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-17T19:55:24+05:30
 */

 /**
  * @Author: Harsha Attray <harsha>
  * @Date:   2017-09-17T19:30:05+05:30
  * @Project: Retailstore-Attendance-Monitor
  * @Filename: filterArrayHelper.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-17T19:55:24+05:30
  */

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



 var filteredProducts = [];
 // traditional way

 for (var i = 0; i < products.length; i++) {
   if(products[i].type === 'fruit'){
     filteredProducts.push(products[i])
   }
 }

 console.log(filteredProducts);

 // Filter Array helper function
 var vegetableFilter = products.filter(function(product){
     return product.type === 'vegetable'
 });

 var vegetablePriceFilter = products.filter(function(product){
     return product.type === 'vegetable' && product.price > 500
 });



 console.log(vegetableFilter);



var filteredProducts = [];
// traditional way

for (var i = 0; i < products.length; i++) {
  if(products[i].type === 'fruit'){
    filteredProducts.push(products[i])
  }
}

console.log(filteredProducts);

// Filter Array helper function
var vegetableFilter = products.filter(function(product){
    return product.type === 'vegetable'
});
console.log(vegetableFilter);
