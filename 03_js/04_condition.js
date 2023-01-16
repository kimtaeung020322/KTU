/*

    조건문(conditon)
        - 조건에 따른 실행 여부를 결정해서 분기 처리를 한다.

    if(조건식)문 
        - ()안의 조건식이 true일 때만 {}(코드블록)안의 코드가 실행된다.
        - ()true처럼 동작하는 값들과 false처럼 동작하는 값이 있다.

    if(조건식) ~else 문
        - ()안에 해당하지 않을 경우 else문이 실행된다.
        - 조건이 하나인 경우에 대해서 사용을 한다.

    switch문
        - ()안에 값을 case에 따라서 조건 처리한다.
        - ()안에 계산식을 작성해서 사용한다.
        - case문이 실행돼도 이후의 case문들도 실행된다.
            => break문을 통해서 빠져나올 수 있다.
            => break 시점을 잘 활용하면 여러 case를 하나로 묶을 수 있다.
        - default문은 기본적으로 실행될 코드이다.
        
 */

console.log("--------------if문--------------");

var age = 29;
if (true) {
  console.log(true);
}

console.log("--------------if ~ else문--------------");

if (age >= 30) {
  console.log("30세 이상입니다.");
} else {
  console.log("30세 미만입니다.");
}

console.log("--------------if ~ else if문--------------");

if (age >= 30) {
  console.log("30세 이상입니다.");
} else if (age >= 20) {
  console.log("20세 이상입니다.");
} else if (age >= 10) {
  console.log("10세 이상입니다.");
} else {
  console.log("10세 미만입니다.");
}

console.log("--------------예제1--------------");

// user라는 변수에 name "김태웅" age 30,  genger "male"라는 속성을 가진 객체 만들기
//  if문을 통해서 male이면서 20대 이상인 경우만 이름을 출력하기

var user = {
  age: 30,
  name: "김태웅",
  genger: "male",
};
// &&(and)을 통한 여러 조건 확인
if (user.genger === "male" && user.age >= 20) {
  console.log(user.name);
}

// if문의 중첩
if (user.genger === "male") {
  if (user.age >= 20) {
    console.log(user.name);
  }
}

// num이 "짝수 입니다." 출력 반대의 경우  "홀수 입니다." 출력
console.log("--------------예제2--------------");

var num = 10;

if (num % 2 === 0) {
  console.log("짝수 입니다.");
} else {
  console.log("홀수 입니다.");
}

console.log("--------------switch문--------------");

var num02 = 10;

switch (num02) {
  case 1:
    console.log("1입니다.");

  case 2:
    console.log("2입니다.");

  case 10:
    console.log("10입니다.");
}

var data = "10";

switch (typeof data) {
  case "number":
    console.log("숫자형 데이터입니다.");
    break;

  case "string":
    console.log("문자열 데이터입니다.");
    break;

  default:
    console.log("default 실행");
}

console.log("--------------예제1--------------");

// Math.floor(숫자) => 소수점 버림
// 스코어가 90점 이상이면 A등급
// 스코어가 80점 이상이면 B등급
// 스코어가 70점 이상이면 C등급
// 스코어가 60점 이상이면 D등급
// 그 미만 F등급

var score = 89;

switch (Math.floor(score / 10)) {
  case 10:
  case 9:
    console.log("A등급");
    break;

  case 8:
    console.log("B등급");
    break;

  case 7:
    console.log("C등급");
    break;

  case 6:
    console.log("D등급");
    break;

  default:
    console.log("F등급");
}

console.log("--------------삼항 연산자--------------");

// 삼항 연산자 : 조건식 ? true일 경우ㅠ : false일 경우

var isEven;
if (isEven % 2 === 0) {
  isEven = "짝수";
} else {
  isEven = "홀수";
}

var isOdd = num % 2 === 0 ? "짝수" : "홀수";

console.log(isOdd);

/* 

    truthy와 falsy
        truthy : true처럼 평가되는 값.
            => 0이 아닌 숫자. 문자열, 값이면 웬만하면 true처럼 동작.
        
        falsy : false처럼 쳥가되는 값. 
            => 0, undefind, null
*/

var user02 = {
  name: "seok",
  age: 31,
};

//  usre02에 weight 프로퍼티가 없으므로 undifind가 출력되고,
// false 동작해서 프로퍼티에 대한 분기 처리
if (!user02.weight) {
  console.log("없는 프로퍼티입니다.");
}

// 단축 평가 &&
//      &&(and)
//          - 앞의 조건이 false일 경우 앞의 값으로 평가하고
//            앞의 조건이 true일 때 뒤의 값으로 평가
//      ||(or)
// - 앞의 조건이 true면 뒤를 평가 안하고,
// 앞의 flase면 뒤의 값을 평가

var num04 = 10;

var val = num04 >= 10 && "10보다 크거나 같음";
console.log(val);

var val02 = num04 % 2 === 0 || "짝수 아님";
console.log(val02);

//  num04가 짝수면 console.log()가 실행되고, 홀수면 실행되지 않는다.
num04 % 2 === 0 && console.log("짝수임");

//JS에서는 값이 평가되지만 사용되지 않을 수 있다. 즉, 평가를 하려면 실행이 되어야 한다.
1 + 1;
