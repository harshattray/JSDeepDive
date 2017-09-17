/*By Ref and By Value*/


/*by Value*/

var a = 2;

var b = a

/*b points to a new location in the memory and the value is stored as a copy in another location
  b points to a copy of a's value

  this is - byValue.  All primitive types (number,string,boolean..) are referenced byValue
*/

/*If we change a it should not change b */

a = 1

console.log(a,b);

/*By reference*/

/*In case of Objects, they point to the same location and no new copy is created. This is
by reference
*/

var a = {

    greet: 'hi'
}

var b = a

console.log(a)
console.log(b)

a.greet = 'bye'
/*After mutating a*/

console.log(a)
console.log(b)

/*both change since they point to the same location and no copies are created unlike
for primitive values where we use call by value
*/

/*All objects interact by reference*/



/*Even as parameters objects are passed by reference*/

function changeThings(obj) {
    obj.greet = 'Hey!' /*mutating object*/
}

changeThings(a);
console.log(a)
console.log(b) /*Both Change since objects are called by ref*/


/*Equals operator sets up new memory Space.*/
a = {
    greet: "Go!" /*This creates a new memory space and hence they point to different locations*/
}
console.log(a)
console.log(b)

/*a and b dont point to the same memory space now and hence have different value*/
