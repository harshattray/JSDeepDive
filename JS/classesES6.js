/**
 * @Author: harsha
 * @Date:   2017-09-29T13:30:06+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-29T14:40:20+05:30
 */


/*Creating a class in ES5*/
function Car(options) {
  this.title = options.title;
}
/*Adding methods to prototype*/
Car.prototype.drive = function () {
  return 'AutoShift';
}

/*Inheriting  */
function Suzuki (options) {
  Car.call(this,options);
  this.color = options.color;
}

Suzuki.prototype = Object.create(Car.prototype);

Suzuki.prototype.constructor = Suzuki;
Suzuki.prototype.honk = function(){
  return 'HONK HONK';
}


const car = new Car({title : 'For-Sale'});

const Suzuki = new Suzuki({color: 'Blue', title: 'Not for Sale'})

car.drive();
Suzuki.drive();
Suzuki.honk();


/*ES6 refactor of the above process*/

class Cars {
  constructor(options) {
    this.title = options.title;
  }

  drive (){
    return 'AutoShift';
  }
}

const cars = new Cars({title: 'Suzuki'});

cars.drive();


/*New Class*/

class Suzuki extends Cars { /*Inheriting in ES6*/

  constructor({color}) {
    this.color = color;
  }

  honk() {
    return 'HONK HONK';
  }
}

const suzuki = new Suzuki({color:'Red'});

suzuki.honk()
