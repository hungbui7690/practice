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
  1) 
  - lấy ra name, openingHours và categories
*/

/* 
====================================
  2) 
  - lấy ra name và đổi tên thành restaurantName, openingHours = hours và categories = tags
*/

/* 
====================================
  3) 
  - lấy ra menu set default là [], starterMenu thì đổi tên là starters, đồng thời set default là []
*/

/* 
====================================
  4) 
  a - nested objects: lấy ra fri 
  b - lấy ra open và close trong fri
*/

/* 
====================================
  5) 
  - lấy ra open và close trong fri đồng thời đổi tên thành o và c
*/

/* 
====================================
  6) 
  - viết function orderDelivery nhận vào object 
  - từ object ở trên sử dụng destructuring thành (starterIndex, mainIndex, time, address)
  - set default value trong trường hợp nếu không có properties tương ứng 
  
*/
