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
