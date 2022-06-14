/* 
||=================================||
1) Primitives: 
age và oldAge = ???

*/
// primitives
let age = 30;
let oldAge = age;
age = 31;
// console.log(age);
// console.log(oldAge);
// -------------------------

/* 
||=============================================||
2) References:
age của joe, và age của friend là bao nhiêu
*/
const joe = {
  name: "Joe",
  age: 30,
};
const friend = joe;
friend.age = 27;
// console.log("Friend: ", friend);
// console.log("Me: ", age);
// -------------------------

/* 
||=============================================||
3) Copy 1st level in object (shallow copy)
- tạo biến jessicaCopy và copy jessica
- sau đó đổi age rồi log ra 2 thằng
- push vào array family trong jessica để test shallow copy

*/
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
