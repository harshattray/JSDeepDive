/**
 * @Author: harsha
 * @Date:   2017-09-28T17:09:02+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-29T13:25:06+05:30
 */

var expense = {
  type: 'Trivial',
  amount: '8000'
}
/*accessing in es5*/

var type = expense.type;
var amt = expense.amount;

/*ES6*/
const { type, amount } = expense


/**/

var savedFile = {
  extension : '.png',
  name : 'my_image',
  size: 98089
}

function filedetailsFetch(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

filedetailsFetch(savedFile);

/*Destructured Version*/

function  filedetailsFetchDes({name,extension,size}){
  return `The file ${name}.${extension} is of size ${size}`
}

filedetailsFetchDes(savedFile);

/*with Multiple Arguments*/

function  filedetailsFetchDesMul({name,extension,size},{shape}){
  return `The file ${name}.${extension} is of size ${size} and shape ${shape}`
}

filedetailsFetchDes(savedFile,{shape:'oval'});

/*Destructuring Arrays*/

const items = [
  'Mango',
  'RawMango',
  'No More Mangoes'
];

/*This pulls out the first element only*/
const [ name ] = items;
/*This pulls out subsequent elements too*/

const [ name, name2, name3] = items;

/*OR use spread to fetch whatever that is remaining*/

const [name, ...remaining ] = items


/*Destructuring objects within arrays*/
const Countries = [
  {name: 'India', Capital: 'New Delhi'},
  {name: 'UK', Capital: 'London'},
  {name: 'Spain', Capital: 'Madrid'},
  {name: 'Russia', Capital: 'Moscow'},
  {name: 'Australia', Capital: 'Canberra'}
]

const [{Capital}] = Countries /*fetches the capital off the first array*/

const cities = {
  amenities: [ 'Bridges', 'Railways', 'Waterways']
}

const {amenities :[fetch]} = cities;


/*Converting an array to an object in ES6*/

const values =[
  [8,9],
  [7,3],
  [2.6]
]

values.map(([x,y]) => {
  return {x,y};
});
