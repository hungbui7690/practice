// "use strict";

const joe = {
  firstName: "Joe",
  year: 1990,
  calcAge: function () {
    // console.log(this);
    // console.log(2022 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); // regular function call, even though it is called in a method
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

/* 
1) 
- bật tắt 'use strict' để xem sự khác biệt
- console.log(this.firstName);
=======================================
*/

/*

/* 
2) 
- var firstName = "matilda";
- console.log(this.firstName);
=========================================
*/

/* 
3) 
- bật tắt 'use strict' để xem sự khác biệt
- nếu mở 'use strict' thì fix như thế nào (2 cách)
=========================================
*/
joe.calcAge();

/* 
4) 
- làm sao để lấy ra hết các arguments 
*/
const addExpr = function (a, b) {
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

/* 
4) 
- chuyển câu 4 thành arrow functions 
- làm sao để lấy ra hết các arguments 
*/
