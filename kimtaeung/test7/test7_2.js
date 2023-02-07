document.write("<h1>3의 배수 찾기</h1>");

let num = window.prompt("몇 까지 3의 배수를 찾을까요?");
let resoult = "";
let count = 0;
for (let i = 3; i <= num; i += 3) {
  resoult += i + ",";
  count++;
}

document.write(
  "<p>" +
    resoult +
    "<br><span color='red'>" +
    num +
    "까지 3의 배수의 개수 : " +
    count +
    "</span></p>"
);
