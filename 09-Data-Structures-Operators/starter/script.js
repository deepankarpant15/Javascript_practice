'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order_pasta: function (in1, in2, in3) {
    console.log(`Here is use pasta with ${in1}, ${in2}, ${in3}`);
  },
};

/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Chap 1 Destructing arrray in JS

// let [main, seco] = restaurant.categories;
// console.log(main, seco);

//-----2 swapping traditional;

// const temp = main;
// main = seco;
// seco = temp;

// console.log(main, seco);

//---2.1 Swapping using destructing array in JS

// [main, seco] = [seco, main];
// console.log(main, seco);

//-----3 Destructing resturn values from function

// console.log(restaurant.order(2, 0));

// const [st, ma] = restaurant.order(2, 0);
// console.log(st, ma);

//-----3.1 for nested array destructing

// const [i, , [j, k]] = [2, 3, [4, 5]];
// console.log(i, j, k);

// ------ Default Values when not knnown lenght of array

// const [p, k, j] = [8, 9];
// console.log(p, k, j); // undefined value for j

// setting default value 1
const [p, k, j = 1 ] = [8, 9];
console.log(p, k, j);
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//------  Ch 2 Obeject dest

const { name, openingHours, mainMenu } = restaurant;
// console.log(name, openingHours, mainMenu);

//---- 2.1 changing variable name for accessing

const { name: resnam, openingHours: time, mainMenu: mm } = restaurant;
// console.log(resnam, time, mm);

//----- 2.2 Default

const { main = [], location: place = [] } = restaurant;
// console.log(main, place);


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ----------- CH 3 Spread operator
// ! USe Case : Create a copy

const new_menu = [...restaurant.mainMenu, 'Burger', 'Freied rice'];
console.log(new_menu);

// 2 Merge 2 array

const me = [...new_menu, ...restaurant.starterMenu];
console.log(me);
// Not work in string literals as this will multiple argu whivh can only will be use in function

// Real world example

const ing = [prompt('Enter ing1'), prompt('Enter ing2'), prompt('Enter ing3')];
restaurant.order_pasta(...ing);

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//----------- CH 4 Rest Pattern & Parameters
// USe case packing elements in array opp of spread

const [a, b, ...other] = [1, 2, 345, 5, 6, 7, 8];
console.log(a, b, other);

// for functions rest paratmeters


////////////////////////////////////////////
//  Optional chaining in JS (obejects)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//----- for of loop
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// " ?? -> nullish operator feature in js for defining undefined & NULL values"
// ----- IN Mrthods

console.log(restaurant.order?.(2, 0) ?? 'Method doesnt exist');
console.log(restaurant.starterMeu?.(2, 0) ?? 'Method doesnt exist');

// -------- Ch Object Looping
//----- .1 Propert Names

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openstr = `We are open at ${properties.length} days: `;
for (const day of properties) {
  openstr += `${day},`;
}
console.log(openstr);

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// ------- Ch Sets
const staff = ['waiter', 'Cheif', 'Manager', 'Waiter ', 'Cheif'];

const satffunique = [...new Set(staff)];
console.log(satffunique);
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//------------ // Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//---------- Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

///////////////////////////////////////

//------------- Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));  // conevrting string primitive into string object
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
