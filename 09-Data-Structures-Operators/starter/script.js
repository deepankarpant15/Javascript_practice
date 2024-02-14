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
*/
