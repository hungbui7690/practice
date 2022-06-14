const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const labelBalance = document.querySelector(".balance__value");

const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

// --------------------------------
// 05_create_DOM_elements
// --------------------------------
const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov < 0 ? "withdrawal" : "deposit";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>s
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

//---------------------------------
//-------------START HERE ---------

/*
  1) Get all deposits
  2) Convert to USD 
  3) Total
*/

/* 
====================================
  1) 
  - lấy ra totalDepositUSD
*/

/* 
====================================
  2) 
  - tính tổng của deposits
  - tính tổng của withdraw

  labelSumIn
  labelSumOut
*/

/* 
====================================
  3) 
  - bank changes the rule >> just keep the interests which are greater than 1$
    if interest = 1.2% & interest >= 1$

  labelSumInterest
*/

/* 
====================================
  4) 
  -
*/

/* 
====================================
  5) 
  -
*/

/* 
====================================
  6) 
  -
*/

/* 
====================================
  7) 
  -
*/
