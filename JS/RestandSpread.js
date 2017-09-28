/**
 * @Author: harsha
 * @Date:   2017-09-28T16:30:44+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-28T16:52:39+05:30
 */


function addNumbers(numbers) {
   return numbers.reduce((sum,number) => {
      return sum + number
   },0)
}

addNumbers([7,9,8,7,345]);

/*what if i wanted to pass numbers that arent in an array
 this is where we use the rest operator to pass in the arguments into the function when they arent in array form
*/

/*Refactoring the above funcion with rest operator*/

function restadddNumbers(...numbers) {
  return numbers.reduce((sum,number) => {
     return sum + number
  },0)
}

restadddNumbers(9,8,7,6,5,3);

/*spread*/

const defaultData = ['ball','bat','gloves']
const userDefinedData = ['teamName','teamStadia','teamlogo']

/*In order to combine them we could youse concat*/

let array1 = defaultData.concat(userDefinedData);
/*but using spread*/

let array2 = [...userDefinedData,...defaultData];

/*More Flexibility*/

let array3 = ['headgear',...userDefinedData,...defaultData];

console.log(array3,array2,array1);
