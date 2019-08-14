'use strict';

//Drill #1
const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (this.water / this.flour) * 100;
  }
};

// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

//Drill #2
const fooBar = {
  foo: 'hello',
  bar: 5,
  fum: true,
  quux: 30,
  spam: 'hello there'
};

function printFooBar() {
  for(let key in fooBar) {
    console.log(`${key}: ${fooBar[key]}`);
  }
}

//printFooBar();

//Drill #3
const hobbitMeals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

//console.log(hobbitMeals.meals[3]);

//Drill #4
const arrayOfPeople = [
  {name: 'Steve', jobTitle: 'student'}, 
  {name: 'Quasar', jobTitle: 'game artist'},
  {name: 'Alex', jobTitle: 'chemist'}
];

function peopleInArray(arrayOfObject) {
  arrayOfObject.forEach(element => 
    console.log(`Hi my name ${element.name} and I'm a ${element.jobTitle}!`));
}

//peopleInArray(arrayOfPeople);

//Drill #5
const arrayOfPeopleWithBoss = [
  {name: 'Steve', jobTitle: 'Student', boss: 'Alex'}, 
  {name: 'Quasar', jobTitle: 'Game Artist', boss: 'Alex'},
  {name: 'Alex', jobTitle: 'Chemist'}
];

function peopleWithBoss(bossIncludedArray) {
  bossIncludedArray.forEach(element => {
    if('boss' in element) {
      console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}.`);
    } else {
      console.log(`${element.jobTitle} ${element.name} doesn't report to anyone.`);
    }
  });
}

//peopleWithBoss(arrayOfPeopleWithBoss);

// 6. Cracking the Code

// use an object as your cipher. Instead of doing some kind 
// of condition check like if (char === 'a'), 
// you should use an object's key-value pair structure as the code translator. 

// this decodes a word into a single char based on the first letter
const decoderKey = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decode(str) {
  // take the first letter in str  ex: 'b'
  // check if the letter is a key in decoderKey
  // if it is a key, then we return the letter at index 'value'

  for(let key in decoderKey) {
    if (str[0] === key) {
      return str[decoderKey[key]];
    }
  } 
  return ' ';
}

function decodeWords(sentence) {
  let words = sentence.split(' ');

  return words.reduce( (accumulator, currentValue) => { 
    return accumulator + decode(currentValue);
  }, '');
}

let string = 'craft block argon meter bells brown croon droop';
console.log(decodeWords(string));


// 7. write a character builder factory function 

function createCharacter() {

  // describe method
    // no parameters
    // prints out string "{name} is a {race} from {origin}."

  // evaluateFight method
    // takes charactrer object
    // returns string: "Your opponent takes {x} damage and you receive {y} damage"


  
  // create array of characters that calls createCharacters()}
