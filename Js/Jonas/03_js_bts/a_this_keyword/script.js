"use strict";

/* 
================================
1) 
this = ? 
*/
// console.log(this);

/* 
================================
2) 
this = ??
*/
const calcAge = function (birthYear) {
  console.log(this);
};
// calcAge(1990);

/* 
================================
3) 
this = ??

*/
const joe = {
  year: 1990,
  calcAge: function () {
    console.log("this", this);
    console.log(2022 - this.year);
  },
};

// joe.calcAge();

/* 
================================
4) 
- copy calcAge từ joe sang matilda
- matilda.calcAge() thì lúc này this = ??
*/

const matilda = {
  year: 2017,
};

/* 

5) 
================================
- khi chạy f() thì this = ???
*/
const f = joe.calcAge;

// f();
