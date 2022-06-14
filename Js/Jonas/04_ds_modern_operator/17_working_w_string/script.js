const airline = "TAP Air Portugal";
const plane = "A320";

/* 
====================================
  1) 
  - lấy ra chứ đầu trong plane
  - lấy ra chữ đầu trong chuỗi B312
*/

/* 
====================================
  2) 
  - lấy ra length của airline
  - lấy ra length của chuỗi B321
*/

/* 
====================================
  3) 
  - lấy ra index của chữ r trong airline
  - lấy ra index của chữ r cuối trong airline
  - lấy ra index của chữ potugal trong airline
*/

/* 
====================================
  4) 
  - airline: cắt chuỗi từ index 4 tới hết
  - airline: cắt chuỗi từ index 4 tới 6 (tricky)
  - airline: lấy từ index 0 tới khoảng trắng đầu tiên
  - airline: lấy ra 2 chữ cuối cùng
*/

/* 
====================================
  5) 
  - ghế B và E là middle seat, viết hàm check
*/
const checkMidSeat = function (seat) {};
checkMidSeat("11B");
checkMidSeat("23C");
checkMidSeat("3E");

/* 
====================================
  6) 
  - viết hoa airline
*/

/* 
====================================
  7) 
  - viết hoa chữ đầu
*/
const passenger = "ArMstrONg"; // Armstrong

/* 
====================================
  8) 
  - biến chuỗi loginEmail cho giống với email (chaining)
*/
// Comparing Email
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.IO \n";

/* 
====================================
  9) 
  - biến , thành .
  - biến # thành $
*/
const priceGB = "288,97#";

/* 
====================================
  10) 
  - biến tất cả boarding thành gate (cách cũ là regular expression)
*/
const annoucement = `All passenger come to boarding door 23. Boarding door 23!`;

/* 
====================================
  11) 
  - check xem trong plane có chứa chuỗi A320 hay không
  - check xem plan bắt đầu với chữ A3 phải không
*/
// const plane = "A320";

/* 
====================================
  12) 
  - nếu plan bắt đầu với Air, và kết thúc với neo >>> Part of New Airbus family!
*/
const plane1 = "Airbus A320neo";

/* 
====================================
  13) 
  - check xem trong baggage có knife hoặc gun hay không
*/
const checkBaggage = function (items) {};

checkBaggage("I have a laptop, some food, and a pocket knife");
checkBaggage("Socks & Camera");
checkBaggage("Snacks & a Gun for protection");

/* 
====================================
  14) 
  - tách a+very+nice+string thành các items trong array
  - tách Joe Doe ra thành firstName và lastName
*/

/* 
====================================
  15) 
  - nối lại: Mr + firstName + lastName
*/

/* 
====================================
  16) 
  - Fix capitalization
*/
const passenger1 = "jessica ann smith davis";

/* 
====================================
  17) 
  - thêm ++++ đằng trước cho đủ 25 kí tự
  - thêm ---- đằng sau cho đủ 30 kí tự
*/
const msg = "Go to gate 23!";

/* 
====================================
  18) 
  - Padding applies to credit cards: giữ 4 số cuối, phần đầu biến thành ******
*/

const maskCreditCard = function (number) {};
console.log(maskCreditCard(45345223234423));
console.log(maskCreditCard("234234234156876787687"));
/* 
====================================
  19) 
  - lặp lại dòng dưới 5 lần
*/
const message = "Bad weather...All Departures Delayed...";

/* 
====================================
  20) 
  - ✈️ >>> in ra nhiều lần
*/
const planesInLine = function (n) {};
planesInLine(5);
