/* 
    연산자(Operator): 산술, 할당, 비교 등을 통해서 새로운 값을 생성.
    피연산자(Operand) : 연산에 사용되는 값.

 */
console.log(5 + 3); // 5와 3이 더해져 8이라는 값 생성

//산술 연산자: 산술을 통해서 값 생성.
console.log(10 - 1);
console.log(20 * 3);
console.log(20 / 4);
console.log(20 % 3); //나머지 연산자
console.log(20 - 3 / 3); //사칙연산

// 단항 연산자 : 1개의 피연산자에 산술을 적용한다.
// ++ : 피연산자의 값을 1 증가. 피연산자의 값을 변화 시킨다.
// -- : 피연산자의 값을 1 감소. 피연산자의 값을 변화 시킨다.
// - : 양수는 음수로, 음수는 양수로 반전시킨다.

var num = 10;
num++; //var num = num + 1
console.log(num);

//후위 연산자 : 단항 연산자가 뒤에 붙으면 우선순위가 마지막이 된다.
//전위 연산자 : 단항 연산자가 앞에 붙으면 우선순위가 가장 먼저가 된다.

var num02 = 10; //10
console.log(num02++); //10.    console.log()의 값으로 먼저 쓰이고 자기를 증가시킨다.
console.log(num02); //11
console.log(12 - num02--); //1

//할당 연산자 : 변수에 값을 할당하는 연산자. 우황이 좌항에 할당된다.
var score = 90;
var num03 = (score = 100);
console.log(num03);

num03 = num - 03 + 20;

// 산술 할당 연산자 : 산술과 핟당을 동시에 한다.

num03 += 30; //num03(120)에 30을 더한 값을 num03에 다시 할당
num03 /= 2;

// 비교 연산자 ; 좌항과 우항을 비교하여 true 혹은 flase를 반환
// 동등 연산자

console.log(1 == 3);
console.log(1 == "1"); //동등연산자를 사용하면 숫자 1과 문자열 "1"을 동등하게 본다
console.log(1 == true); // 동등연산자는 암욱적 변환을 한다.

//일치 연산자 : 값과 데이터 타입 비교

console.log(1 === "1");
console.log(1 === true);

//부동등, 불일치
console.log(1 != "1"); // 두 값이 같지 않은지
console.log(1 !== "1"); // 두 값이 같지 않은지(타입  포함)

// 대소 관계 비교 : 좌항과 우항의 대소 관계를 비교 -> 논리값 반환

var num04 = 4;
var num05 = 10;
console.log(num04 > num05); //num04(4)이 num05(10)보다 큰 지 => false
console.log(num04 < num05);
console.log(num04 >= 4); //num04(4)가 num05(10)보다 크거나 같은지 => true

/* 

    논리 연산자 : 두 논리값을 가지고 새로운 값
    ||(or) : 두 값 중 하나라도 true라면 true 반환 =>  둘 다 false일 때만 flase 반환
    &&(and) : 두 값 모두 true일 때만 true => 둘 중 하나라도 false라면 false 반환
    ! : 논리값을 반전 시킨다. true => false, false => true

*/
console.log(num04 > 10 || num05 < 10); // true or falsae 이기 때문에 true
console.log(num04 < 10 && num05 > 4); // true and true 이기 때문에 true
console.log(!(num04 < 10)); // not true이기 때문에 fasle

//문자열 연결 연산자 : 좌항과 우항의 문자열을 연결
var str = "안녕하세요" + " 황보 석 입니다.";
console.log(str);

aeg = 31;
var str02 = "저는 " + aeg + "세 입니다."; //숫자 + 문자열을 사용하면 연결 연산자로 동작한다.
console.log(str02);
//연결 연산자보다는 템플릿 리터럴로 대체하는 것으로 추천
