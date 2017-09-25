/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-09-17T23:24:45+05:30
 * @Project: Retailstore-Attendance-Monitor
 * @Filename: EveryandSomehelper.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-22T17:42:07+05:30
 */
var cars = [
  {name :'electric', speed: 13},
  {name :'diesel', speed: 130},
  {name :'Fuelcell', speed: 300}
]
//using for loop

var allMachinesCanRunProg = true;
var onlySomeMachinesCanRunProg = false

for(var i = 0; i< cars.length i ++ ){
  var car = cars[i];

  if(car.speed < 100){
    allMachinesCanRunProg = false;
  }
  else{
   onlySomeMachinesCanRunProg = true
  }
}

/*forEvery runs through each of the values in the array and checks for truthy or falsy condition of each one of them  individually
 and also combined together and returns a boolean value 
*/
