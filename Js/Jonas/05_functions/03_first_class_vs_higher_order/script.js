// First Class Functions:
// JS treats functions as "first-class citizens" >> this means that functions are "simply values" & another "type of object"
// >> 1) we can store functions in variables or properties
// >> 2) we can pass function as arguments to other functions
// >> 3) we can RETURN functions FROM functions
// >> 4) we can call methods on functions >> bind(), apply()

// Higher-Order Functions:
// is a function that "receives" another function as an argument (addEventListener(event, callback Fn)), that "returns" a new function, or "both"
// function count() {
//   // higher-order fn
//   let counter = 0;
//   return function () {
//     // returned fn
//     couter++;
//   };
// }

// >>> First-Class is just a theory >> fn is a value >> no first-class function in practice

//-----------------------------------------------------

/* 
====================================
  1) 
  - viết function oneWord() để convert string từ "Hung Bui" thành "HungBui" 
  - rồi convert sang lowercase
*/

/* 
====================================
  2) 
  - viết function upperFirstWord() để fix capitalization 
*/

/* 
====================================
  3) 
  - viết function transformer(str, fn) nhận vào function làm param
  - trong đó gọi 2 function ở trên và log ra
*/
