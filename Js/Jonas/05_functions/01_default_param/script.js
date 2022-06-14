/* 
====================================
  1) 
  a - createBooking(): function expression
  b - flightNum, numPassengers (default value = 1), price = 199 * numPassengers
  // ES5
  // numPassengers = numPassengers || 1; // old way >> pre ES6
  // price = price || 199; // old way >> pre ES6
  c - tạo ra booking object chứa flightNum, numPassengers, price
  d - push vào array bookings
*/
const bookings = [];
const createBooking = function () {};

createBooking("LH123");
createBooking("LH123", 5);
createBooking("LH123", 2, 350);

/* 
====================================
  2) 
  giờ muốn skip thằng numPassengers param thì làm sao?
  - createBooking("XS318", ______, 500);
*/
