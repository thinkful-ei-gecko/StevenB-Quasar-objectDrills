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