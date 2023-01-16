/* 
    alt + shift = a : 여러줄 주석 처리
*/

/* 
    변수
        - 메모리에 데이터가 저장될 공간.
        - 변수명을 통해서 데이터가 저장된 공간에 접근
        - 값을 저장하고 꺼내쓰는 주머니

    변수 선언
        - 메모리 공간을 확보하고 공간에 이름을 붙인다.
        - 변수 키워드와 함께 변수 이름 작성 => var, let, xonst(상수)
        - 변수를 선언하기만 하면 undefined라는 값이 초기화 된다.
        - ,를 통해서 여러개의 변수를 한번에 선언할 수 있다.
    
    변수의 값 할당
        - 마련된 변수 공간에 값을 저장한다.
        - 값이 저장된 변수의 값을 변경할 수 있다(재할당).


    변수 초기화
        - 선언과 동시에 초기값을 할당한다.

*/

var num = 10;
// console.log(num);

//변수 선언
var age;

// console.log(age);

//변수의 값 할당
age = 30;
// console.log("age : ", age);

//변수 초기화
age = 40;
// console.log("age : ", age);

// 변수 동시 선언
var name, address;

// num01, num02를 선언하고 각각 10, 20을 할당

var num01 = 10;
var num02 = 20;
var temp = num01;

console.log("num01 : ", num01, "num02 : ", num02);

num01 = num02;
num02 = temp;

console.log("num01 : ", num01, "num02 : ", num02);

/* 
    변수명 작성 규칙
        - 문자, 숫자, _, $만 사용 가능
        - JS 키워드는 뱐수명으로 사용할 수 없다.
        - 변수명은 숫자로 시작할 수 없다.

*/

// var num@ = 10;    @는 변수명으로 사용할 수 없다.

// var var;         키워드는 변수명으로 사용할 수 없다.

// var 1num = 10 ;   변수명은 숫자로 사용할 수 없다.

// var userList = []; 카멜 케이스, 띄어쓰기 부분을 대문자로 구분한다.
// var user_list = []; 스네이크 케이스, 띄어쓰기 부분을 _(언더바)로 구분한다.
// var UserList = []; 카멜 케이스와 동일하지만 대문자로 시작한다. 주로 생성자의 이름에 사용된다.

/* 

    var를 쓰면 안되는 이유
        1) 변수 호이스팅이 일어난다.
        2) 중복 선언이 가능하다.
        3) 함수 레벨 스코프만 지원하고 블록 레벨 스코프는 지원하지 않는다.

*/
console.log("------------- var를 쓰면 안되는 이유--------------");
console.log(a); // 변수 호이스팅 발생. undefined 출력.
var a = 10;
var a = 100; // var 키워드는 중복 선언을 해도 오류가 발생하지 않는다.
console.log(a);

// let a= 0;   // let 키워드는 중복 선언하면 오류가 발생

// console.log(b); //호이스팅은 일어나나 TDZ로 인해 오류 발생
let b = 10;
