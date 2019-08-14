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

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name, 
    nickname,
    race, 
    origin,
    attack, 
    defense,
    weapon,

    describe() {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`);
    },

    evaluateFight(opponent) {
      return `Your opponent takes ${ opponent.defense >= this.attack ? 0 : this.attack - opponent.defense} 
      damage and you receive ${ this.defense >= opponent.attack ? 0 : opponent.attack - this.defense} damage`; 
    }
  };
}

// create array of characters that calls createCharacters()
// contains 5 objects

const characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a Wizard Staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'Shire', 3, 2, 'Sting and Barrow Blade'),
  createCharacter('Aragorn Son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'legolas', 'elf', 'Woodland Realm', 8, 5, 'a Bow and Arrow')
];

// characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 5, 5, 'Hadhafang'));   // add arwen to characters array
// characters.find( element => element.nickname === 'aragorn' ? element.describe() : null);      // find 'aragorn' and call his describe function
// const hobbits = characters.filter( element => element.race === 'Hobbit');                     // create a new array of just hobbits from characters
// console.log(hobbits);

// const strongCharacters = characters.filter( element => element.attack > 5);  
// console.log(strongCharacters);

//Drill #8
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  let foundHero = arr.find(element => {

    let queryKeys = Object.keys(query);
    let queryResults = queryKeys.find((key, index) => {
      if(query[key] !== element[key]) {
        return false;
      }
      if(index === queryKeys.length - 1) {
        return true;
      } 
    });
    return queryResults;
  });
  if(foundHero === undefined) {
    foundHero = null;
  }
  return foundHero;
}

//console.dir(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));