// secureBooking() >> outer
const secureBooking = function () {
  let passengerCount = 0;

  //booker() >> inner
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // at this time, secureBooking() is finished and was removed from the stack >> the EC which contains passengerCount = 0 was remove as well
booker(); // so how can the booker() access to the passengerCount and update it >> closure >> it will remember all the information of the variables at the birthplace at the time those variables were created
booker();
booker();

// booker() là function con nằm bên trong secureBooking() >> nó có thể access tới tất cả các biến trong secureBooking() >> cho dù secureBooking() đã chạy xong thì nó vẫn có thể access tới EC của secureBooking() >> và connection này đc gọi là closure

// a function has access to the variable environment (VE) of the execution context in which it was created even after that context has gone
// Closure is the VE attached to the function, exactly as it was at the time and place the function was created.

/*
  A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The funciton keeps a reference to its outer scope, which preserves the scope chain thoughout time.

  A closure makes sure that a function does not lose connection to variables that existed at the function's birth place. 

  We do NOT have to manually create closures, this is a JS feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible JS object.
*/

console.dir(booker); // [[Scopes]] >> Closure
// [[  ]] : whenever we see those brackets >> internal variables that we cannot access from our code

// ===================================================================

//-------------------------------------------
console.log("--------- 1 ----------");
//-------------------------------------------

// Example 1
let f;

const g = function () {
  const a = 4;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 10;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f); // closure: a = 4

h();
f();

console.dir(f); // at this time, Closure just contains ONLY b = 10

//-------------------------------------------
console.log("--------- 2 ----------");
//-------------------------------------------

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3; // if we comment this line >> perGroup = 1000 (line 47)

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each will ${perGroup} passengers`);
  }, 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // this is to prove closure has higher priority than global scope chain
boardPassengers(180, 3);
