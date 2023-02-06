// 1. 필요한요소 가져오기
// 2. 이벤트 바인딩 => 클래스명 추가 및 제거

let btnSide = document.querySelector(".btnSide");
let nav = document.querySelector("nav");
btnSide.addEventListener("click", function () {
  nav.classList.add("on");
});
nav.addEventListener("click", function (e) {
  //   if (e.target.matches(".on")) {
  //     nav.classList.remove("on");
  //   }

  if (e.target === e.currentTarget) {
    // 이벤트가 바인딩된 타켓과 이벤트가 실제 발생한 타겟을 비교
    nav.classList.remove("on");
  }
});

//------------------------------------------------------------------
let btnClose = document.querySelector(".modalBg .btnBox button");
let modalBg = document.querySelector(".modalBg");

btnClose.addEventListener("click", function () {
  modalBg.classList.add("close");

  setTimeout(() => {
    modalBg.style.display = "none";
  }, 300);
});

window.addEventListener("resize", function () {
  //  사이즈 조절을 했더니 창의 너비가 800보다 늘어나면 nav 태그의 on 클래스 삭제
  console.log(window.innerWidth);
  if (this.window.innerWidth > 800) {
    nav.classList.remove("on");
  }
});
