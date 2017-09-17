/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-09-17T19:30:05+05:30
 * @Project: Retailstore-Attendance-Monitor
 * @Filename: filterArrayHelper.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-17T19:42:14+05:30
 */

var products = [
  {name: 'apple', type: 'fruit'}
  {name: 'banana', type: 'fruit'}
  {name: 'tomato', type: 'vegetable'}
  {name: 'pineapple', type: 'fruit'}
  {name: 'potato', type: 'vegetable'}
  {name: 'radish', type: 'vegetable'}
  {name: 'carrot', type: 'vegetable'}
  {name: 'orange', type: 'fruit'}
  {name: 'litchi', type: 'fruit'}
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
console.log(vegetableFilter);
