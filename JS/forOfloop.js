/**
 * @Author: harsha
 * @Date:   2017-09-29T14:50:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2017-10-06T07:49:32+05:30
 */
var  arr = [1,2,3];



var resultantArr;

/*Using Array Helper functions*/
arr.find(function(res){
  return res<2;
});

/*Redundant for loop*/

for(var i = 0; i<arr.length; i++){
  resultantArr.push(arr[i]);
}
