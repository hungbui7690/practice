const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// When we get data from real world WEB API, there would be some restaurants that does not have some properties (i.e: monday in this situation) >> undefined

// console.log(restaurant.openingHours.mon.open); // mon = undefined >> mon.open = error

// we can check by using if/else stmt
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// ES2020: Optional Chaining >> when it sees a property that is undefined, it will return immediately

/* 
====================================
  1) 
  - check if monday exist, then get open hour 
*/

/* 
====================================
  2) 
  - check if openingHours exist or not, then check monday exist or not, then check open 
*/

/* 
====================================
  3) 
  - dùng array days bên dưới, check trong restaurant xem ngày nào mở cửa, ngày nào đóng cửa
*/
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

/* 
====================================
  4) 
  - check method order() và method orderBread() xem có tồn tại hay không
*/

/* 
====================================
  5) 
  - check xem user.name có tồn tại hay không
*/
// const user = [{ name: "Joe", email: "joe@gmail.com" }];
const user = [];
