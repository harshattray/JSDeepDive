/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-09-17T22:51:59+05:30
 * @Project: Retailstore-Attendance-Monitor
 * @Filename: findHelper.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-17T23:04:46+05:30
 */


//find helper
var objects = [
  {name : 'yes'},
  {name : 'no'},
  {name : 'maybe'},
];

var foundUser;
// Using For loop

for(var i=0; i<objects.length; i++){
  if(objects[i].name === 'no'){
    foundUser = objects[i];
    break;
  }
}
//Using findHelper.. find keeps calling the function till it returns true.Breaks once it returns true

objects.find(function(object){
  return object.name === 'no'
})

/*Find returns only the first truthy occurence. Doesnt go beyond one so not good for multiple occurences*/
