/* 
    반복문(loop)
    
    for(초기 변수 ; 조건식 ; 증감식)
        - 조건식이 false가 될 때까지 반복적으로 실행한다.
        - 코드블록이 한 번 실행이 끝날 때마다 증감식을 실행한다.
            => 증감식이나 조건식이 잘못 작성된 경우 무한 루프에 빠지게 된다.

    while(조건식)
        - () 안의 조건식이 false가 될 때까지 반복적으로 실행한다.
        - 코드블록 안에서 종료시점을 제어해야한다.
        - 반복 횟수가 불명확할 때 사용한다.
            =>continue는 해당 반복만 건너뛴다.

    do ~while문
        - while문과 동일하지만 한 번은 무조건 실행한다.
    
*/

for (var i = 0; i < 5; i++) {
  console.log(i);
}
// for문 중첩
for (var i = 0; i < 5; i++) {
  console.log(" i : " + i);
  for (j = 0; j < 3; j++) {
    console.log("j : " + j);
  }
}

//  구구단 2단

for (var i = 1; i <= 9; i++) {
  console.log(" 2 X " + i + " = " + i * 2);
  console.log(" 2 X %d = %d", i, 2 * i);
}

console.log("------------예제1-------------");

// 구구단 2단 ~ 9단까지 (for문 중첩)

for (var i = 2; i <= 9; i++) {
  console.log("   %d단 시작", i);
  for (var j = 1; j <= 9; j++) {
    console.log("%d * %d = %d", i, j, i * j);
  }
}

for (var i = 0; i < 10; i++) {
  if (i > 5) break; // break문을 사용하면 반복문에서 빠져나온다.
  console.log(i);
}
console.log("------------while-------------");

var num02 = 0;
var selectdNum = 3;
while (true) {
  num02++; // 증감식이 없기 때문에서 내부에서 증감
  if (selectdNum === num02) {
    console.log(num02);
    break;
  }
}

var num03 = 1;

while (num03 < 10) {
  num03++;
  if (num03 % 2 !== 0) continue; //contiune는 이번 반복만 건너뛴다.
  console.log(num03);
}

var num04 = 0;
do {
  console.log("do ~ while : " + num04);
} while (num04 > 0);
