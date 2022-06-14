// Elements

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

//--------------------------------------------
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

/* 
====================================
  1) 
  - từ array movement, tạo ra html tương ứng

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
*/
