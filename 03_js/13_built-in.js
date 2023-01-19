/* 

    빌트인(built-in)

    전역 객체
        - JS가 되는 실행되는 환경에서 가장 먼저 만들어지는 특수한 객체
            => 실행되는 환경에 따라서 전역 객체가 달라진다. 브라우저에서는 window, Node.js에
        - 어디서든 참조할 수가 있는 최상위 객체(프로토타입 얘기 X)
        - 개발에 필요한 여러 프로퍼티와 메서드를 제공한다.
        - 전역 객체에서 제공하는 프로퍼티와 메서드는 전역객체 참조 부분을 생략할 수 있다.
            => window.console.log() = > console.log()
    Window
        -
*/

// console.log(window);   브라우저에서 전역객체 참조
console.log(global); // Node.js에서의 전역객체 참조

console.log(globalThis); // 실행 환경 상관없이 전역 객체를 참조할 수 있다.
global.console.log("console...");

/* 

    빌트인 개체
        - 전역 객체에 내장된 객체
        - 개발에 필요한 다양한 빌트인 객체가 존재한다.

*/

/* 
    Date : 날짜와 시간에 대한프로퍼티 및 메서드 제공
        - 날짜에 대한 기준은 UTC 1970년 1월 1일 자정부터 흐른시간을 밀리초 단위로 계산한다.

 */
let today = new Date(); // 날짜에 대한 정보를 가지고 있는 인스턴스 생성
console.log("today : ", today); // 인스턴스를 출력하면 현재 시간에 대한 정보 출력

let year = today.getFullYear(); // 날짜의 연도
let month = today.getMonth(); //월을 반환 1월(0) ~ 12월 (11)
let date = today.getDate(); //일을 반환 (1~31)
let day = today.getDay(); // 요일을 일요일(0) ~ 토요일(6)

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

console.log(year, month + 1, date, day, hours, minutes, seconds);

let dateStr = today.toLocaleDateString("ko-KR", {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric",

  dateStyle: "full",
});

let timeStr = today.toLocaleTimeString("ko-KR", {
  //   hour: "2-digit",
  //   minutes: "2-digit",
  //   seconds: "2-digit",
  timeStyle: "full",
});

console.log(dateStr, timeStr);

let yesterday = new Date("2023-01-18"); // 날짜로 변환 가능한 문자열을 전달하면 조기 날짜를 설정할 수 있다.

//  날짜를 변경할 수 있다
yesterday.setFullYear(2022);
yesterday.setDate(today.getDate() - 1); // 오늘 날짜를 기준으로 하루 뺀 날로 설정
yesterday.setMonth(7); // 월을 8월(7)로 설정

console.log(yesterday);

// Math : 수학 관련된 프로퍼티와 메서드

console.log("PI : " + Math.PI);

//  소수점
let floatNum = 1.21;
let floorNum = Math.floor(floatNum); // 소수점 이하의 숫자 내림

console.log(floorNum);

let ceilNum = Math.ceil(floatNum); // 소수점 이하의 숫자 올림
console.log(ceilNum);

let roundNum = Math.round(floatNum); //소수점 이하의 숫자 반올림
console.log(roundNum);

let randomNum = Math.random();
console.log(randomNum); // 0이상 ~1미만 사이의 랜덤한 실수

//121 = > 1의 자리 올림하기
console.log(Math.ceil(121 / 10) * 10);

//1~10 사이의 랜덤한 숫자 만들기
console.log(Math.floor(Math.random() * 10 + 1));

// 로또 번호 1~45의 숫자 6개 추첨하는 함수 만들어 보기. => 중복 허용X
console.log("-------------------");

// function Num() {
//   let findNum = [];
//   let randomNum;

//   while (findNum.length < 6) {
//     randomNum = Math.floor(Math.random() * 100 + 1);

//     if (randomNum <= 45) {
//       if (!findNum.includes(randomNum)) {
//         findNum.push(randomNum);
//       }
//     }
//   }
//   console.log(findNum);
// }

function getLottoNum() {
  let result = [];
  //  result 배열의 개수가 6개가 될 때까지 반복 실핼

  while (result.length < 6) {
    //1부터 45 사이의 랜덤한 숫자 생성
    let num = Math.floor(Math.random() * 45 + 1);
    //result 배열 안에 생성된 번호가 없으면 push
    if (!result.includes(num)) result.push(num);
  }
  return result;
}

// Num();
console.log(getLottoNum());

//1~45 숫자를 가진 배열에서 6번만 가져오기
//  랜덤한 인덱스 생성 후 해당 인덱스번째 요소 가져오기
// 배열에서 중간 요소 가져오는 메서드 활용

let Num = [];

for (let i = 0; i < 45; i++) {
  Num[i] = i + 1;
}

console.log(Num[5]);

let randomNum02 = Math.floor(Math.random() * 45);

console.log(Num[randomNum02]);
