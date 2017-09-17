/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-09-08T15:24:13+05:30
 * @Project: Retailstore-Attendance-Monitor
 * @Filename: ObjectLiteral.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-08T15:24:33+05:30
 * @License: Apache License v2.0
 */



 var person  = {
     firstname: 'my name',
     lastname: 'my Last name',
     address: {
         street: "3rd from wherever",
         number: 989898898,
         value: false
     }
 }

 console.log(person.address.street)

 function greet(val){
     console.log(val.firstname)
 }

 greet(person)

 greet({
     firstname: 'hello',
     lastname: 'there'
 })

 var Tony = {}

 Tony.address = {
     street: 'xtreme right'
 }

 console.log(Tony)

 /*FAKING  NAMESPACING  -- NameSpace Collisions, two variables with the same names can still existbut within
 separate containers*/



 var greeting = 'Hello';
 var greeting = 'Hola!';

 var english = {};
 var spanish = {};

 english.greeting = 'Hello';
 spanish.greeting = 'Hola';

 /*cant do english.greeting.name directly - returns undefined*/

 console.log(english.greeting.name)

 /*on the fly by creating an object*/

 var english ={
     greeting: {
     name: 'English name'
  }
 }

 console.log(english.greeting.name)
