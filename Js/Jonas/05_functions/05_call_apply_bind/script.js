const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
};

/* 
====================================
  1) 
  - tạo array chứa booking trong lufthansa
  - tạo method book() nhận vào name và flightNum
    + log ra: Tony booked a seat on Lufthansa: flight LH-flightNum
    + push vào array: {flight, name}
*/
lufthansa.book(239, "Joe Doe");
lufthansa.book(211, "John Smith");
console.log(lufthansa.bookings);

/* 
====================================
  2) 
  - copy hàm book() bên thằng trên sang thằng dưới 
  - dùng call để gọi hàm book() với 2 thằng lufthansa và eurowings
*/
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

/* 
====================================
  3) 
  - dùng call() và apply() 
*/
const swiss = {
  airline: "Swiss",
  iataCode: "SW",
  bookings: [],
};

/* 
====================================
  4) 
  - dùng bind() 
*/

/* 
====================================
  5) 
  - fix câu comment bên dưới >> sử dụng bind()
*/
// Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
};
lufthansa.buyPlane();
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);

/* 
====================================
  6) 
  - dùng bind để set rate mặc định là 23%
  - gọi hàm
*/
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));
console.log(addTax(0.1, 200));

/* 
====================================
  7) 
  - Challenge: From the tax example above, use functions return functions to re-write
*/
