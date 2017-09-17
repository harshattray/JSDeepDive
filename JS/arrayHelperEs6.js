//Map is used when we need to modify records in some list of data

//Map as implemented using for loop

var array = [1,2,3]

var doubled = []


for(var i = 0; i<array.length; i++){
    doubled.push(array[i]*2);
}

console.log(doubled);


// With map


var doubled = array.map(function(arr){
  return  arr*2

});

console.log(doubled)


var car = [

    { model: 'A', price: 877778 , Expensive: 'CHEAP'    },
    { model: 'B', price: 8678 , Expensive: 'VERY-CHEAP'   }

];

var prices = car.map(function(carData){
    return carData.price
});

console.log(prices);
