const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* 
====================================
  1) 
  
  3 || "Joe"
  "" || "Joe"
  true || 0)  
  undefined || null

  Kết quả ở trên là gì
*/

/* 
====================================
  2) 
  - dùng short circuit để viết lại bài bên dưới và lưu vào biến guest2
*/

// CÁCH CŨ
// restaurant.numGuest = 23;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10; // old method
console.log(`guests1: `, guests1);

/* 
====================================
  3) 
  0 && "Joe"
  7 && "Joe"
  "Hello" && 23 && null && "joe"

  Kết quả ở trên là gì
*/

/* 
====================================
  4) viết bằng 2 cách 
  a - sử dụng if/else: nếu function orderPizza() tồn tại thì gọi function
  b - sử dụng short circuit thay vì if/else
*/
