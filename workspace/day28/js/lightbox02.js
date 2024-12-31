let testButton = document.querySelectorAll(".img-box > button");
let bigImgWrap = document.getElementsByClassName("big-img-wrap");

for(let i = 0; i < testButton.length; i++){
  testButton[i].addEventListener("click", function(){
    bigImgWrap[0].style.display = "flex";

    let src = this.getAttribute("data-src"); // 이 속성의 data-src 값을 src에 저장
    let bigImg = document.querySelector(".big-img"); // .big-img를 접근해야하므로 변수선언
    bigImg.setAttribute("src", src); // src에 src값 할당!
  })

  bigImgWrap[0].addEventListener("click", function(){
    this.style.display = "none";
  });

}