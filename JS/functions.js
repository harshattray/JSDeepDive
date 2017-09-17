/*Functions are Objects in JS*/
/* Explaining First CLass Functions*/

/* What are first class functions - Functions which allow them to be assigned to variables ,

 pass them around as params to other functions and which can be created on the fly

*/

/*

What makes JS different is that you can attach primitives ,
Objects, Functions, to other functions. Two important, hidden properties in JS for functions

- it can/cannot have a name
- the Code part of the function - invocable part

*/


// function tweak() {
//     console.log('here');
// }

/*Adding a property to a function like we would to and object*/

// tweak.name = "My name here";

// console.log(tweak.name)


/*Note to self: Operators are functions. All of them from '+' to '='*/

/*Function Statement*/

function test(){
    console.log('hi') /*doesnt return a value untill it is executed*/
}


/*Function Expression*/

/* testExpression(); this will result in  an undefined function error since we havent reached to the

point where the function is defined and like any other variable its default value is undefined

till a value is assigned to it

*/


var testExpression = function() {
    console.log('hi')   /*creating an object on the fly and assigning it to a variable*/
}

testExpression()/*this will execute since the variable has its function defined*/
test()


/*Function within a function*/

function log(s){

    s();
}

log(function() {
   console.log('hi to functional programming');  /*Functions are objects in JS and
  functions can be passed onto other functions as a parameter

*/
})
