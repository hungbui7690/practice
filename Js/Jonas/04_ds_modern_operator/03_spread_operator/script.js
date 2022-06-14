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
};

/* 
====================================
  1) BAD METHOD
  - tạo ra array arr1 chứa [1, 2, 7, 8, 9]
*/
const arr = [7, 8, 9];

/* 
====================================
  2) NEW METHOD
  - sử dụng spread operator để làm như câu 1) 
  - log ra newArray với spread operator
  - log ra array gốc xem có mutate array gốc hay không
*/

/* 
====================================
  3) 
  - tạo ra newMenu chứa mainMenu và thêm 1 món mới (Gnocci)
*/

/* 
====================================
  4) 
  - sử dụng spread operator để tạo ra shallow copy của mainMenu
*/

/* 
====================================
  5) 
  - spread operator với string Joe Doe
*/

/* 
====================================
  6) 
  - tạo ra function orderPasta(ing1, ing2, ing3)
  - tạo ra array chứa 3 promts để lấy thông tin 3 ingredients và lưu vào array
  - gọi function ở trên với thông tin nhận đc (sử dụng spread operator)

*/

/* 
====================================
  7) 
  - tạo object newRestaurant chứa thông tin restaurant cũ + foundedIn và founder properties
  - thử đổi tên của newRestaurant rồi log cả 2 ra xem có bị mutate hay không
*/
