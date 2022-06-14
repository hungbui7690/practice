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

  orderPizza() {},
};

/* 
====================================
  1)
  DESTRUCTURING: opposite of spread operator >> to collect elements and condense them into an array >> to pack elements into an array 
  
  - bên phải là [1, 2, 3, 4, 5]: lưu 1 vào a, 2 vào 3, và phần còn lại vào others
*/

// spread operator
const arr = [1, 2, ...[3, 4]]; // ... is on the right side of =

/* 
====================================
  2) 
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  - sử dụng spread & rest để lấy ra Pizza, Risotto & otherFoods bằng 1 dòng lệnh
*/

/* 
====================================
  3) 
  - lấy ra sat & weekdays trong openingHours
*/

/* 
====================================
  4) 
  - viết function orderPizza() nhận và ít nhất 1 parameter, các parameter khác là optional
*/
restaurant.orderPizza("mushroom", "onion", "olives");
restaurant.orderPizza("mushroom");

/* 
====================================
  5) 
  - hoàn thành hàm sum bên dưới
  - chạy hàm sum bên dưới với param là array x
*/
const add = function () {};
add(2, 3);
add(2, 3, 4, 5);
add(4, 5, 6, 7, 9, 11);

const x = [1, 2, 3];
