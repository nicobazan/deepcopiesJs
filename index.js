// this file is to show the ways to make a deep copy of an object in javascript

// test with complex object, change carDetails to complexObject
// const complexObject = require('./complexObject');

const lodash = require('lodash');
const carDetails = {  name: 'toyota', age: 1997, model: 'prius' };

// shallow copy
const carDetailsCopy = carDetails;

// Lodash deep clone
const lodashDeepClone = lodash.cloneDeep(carDetails);

// Javascript parse-clone method
const jsStringParse = JSON.parse(JSON.stringify(carDetails));

// deep copy funtion. loop through object. check type and keep looping
// taken from: https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c
function keepCloning(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== 'object') {
       return objectpassed;
    }
  // give tempStorage the original obj's constructor
  var tempStorage = objectpassed.constructor(); 
    for (var key in objectpassed) {
      tempStorage[key] = keepCloning(objectpassed[key]);
    }
    return tempStorage;
  }

  const deepClone = keepCloning(carDetails);

  carDetails.name = 'BMW';
  // name === bmw
  console.log('carDetails',carDetails);
  // name === bmw  
  console.log('carDetailsCopy',carDetailsCopy);
  // name === toyota  
  console.log('lodashDeepClone',lodashDeepClone);
  // name === toyota
  console.log('jsStringParse',jsStringParse);
  // name === toyota
  console.log('deepClone',deepClone);
  
