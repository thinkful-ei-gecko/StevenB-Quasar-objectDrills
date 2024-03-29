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
// console.log(decodeWords(string));


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
  let queryKeys = Object.keys(query);                     // queryKeys = array of keys in query                                EX: {id: 2, name: 'aquaman'}

  let foundHero = arr.find(element => {                   // find in array (HEROES obj array)
    let found = 0;                                        // used in line 175, 177, 178
    let queryResults = queryKeys.find((key, index) => {   // find in queryKeys (array of keys in query)   
      //                                                     queryResults = first matching key                                 EX: {id: 2, name: 'aquaman'}, 2 loops
      //                                                                                                                       loop 1, key = id, index = 0
      //                                                                                                                       loop 2, key = name, index = 1  
      if(query[key] === element[key]) {                                   // if value matches, increment found
        found++;                                   
      } if (index === (queryKeys.length - 1)) {                           // execute on last iteration
        (found === queryKeys.length) ? found = true : found = false;      // if all values matched (found = queryKeys.length)
        return found;
      }
    });
    return queryResults;
  });
  if(!foundHero) { foundHero = null; }                    // set to null if undefined 
  return foundHero;                                       // return foundHero
}

/* 
console.dir(findOne(HEROES, { id: 1 }));                              // test 1
console.log(findOne(HEROES, { id: 10 }));                             // test 2
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));             // test 3
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));     // test 4
console.log(findOne(HEROES, { squad: 'Justice League' }));            // test 5
 */



// 8a. BONUS II: A Databse Method
// create a fake database in memory with the same dataset
// add a method to Database called findOne
// instead of referencing a HEROES array in the global scope, it should pull from the store in the database



const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne(query) {
    let queryKeys = Object.keys(query);                     
    let foundHero = this.store.heroes.find(element => {           // only changed line from #8.         
      let found = 0;                                        
      let queryResults = queryKeys.find((key, index) => {     
        if(query[key] === element[key]) {                                   
          found++;                                   
        } if (index === (queryKeys.length - 1)) {                           
          (found === queryKeys.length) ? found = true : found = false;
          return found;
        }
      });
      return queryResults;
    });
    if(!foundHero) { foundHero = null; }                     
    return foundHero;                                       
  }
};

let findA = Database.findOne({ id: 7});
//console.log(`${findA})}`);
console.log(`${findA}`);
console.dir(Database.findOne({ id: 2}));