let num = prompt("숫자를 입력하시오");
let text;

document.write("<h1>4의 배수일까 아닐까</h1>");

if (num) {
  if (num % 4 === 0) {
    console.log(num);
    document.write("<p>" + num + "는 4의 배수입니다.</p>");
  } else {
    console.log(num);

    document.write("<p>" + num + "는 4의 배수가 아닙니다.</p>");
  }
}
