"use strict";

const restaurant = {
  name: "Classico Italiano",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

/* 
====================================
  1) 
  - Destructuring Array to variables x, y, z
  - log original array & x, y, z
*/
const arr = [2, 3, 4];

/* 
====================================
  2) 
  - des 1st & 2nd items in categories array
*/

/* 
====================================
  3) 
  - get 1st element = main & 3rd = secondary in categories array
*/

/* 
====================================
  4) 
  - switch main & secondary in question 3) using destructuring
*/

/* 
====================================
  5) 
  a - viết function order() nhận vào 2 params starterIndex và mainIndex 
  b - fn trả về array chứa 2 items trong starterMenu và mainMenu với index tương ứng
  c - gọi function và dùng destructuring để lấy về 2 item ở câu b)
*/

/* 
====================================
  6) 
  - destructuring nested array ra flat array
*/
const nested = [2, 4, [5, 6]];

/* 
====================================
  7) 
  - default value khi destructuring
*/
