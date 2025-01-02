const navLogin = document.querySelector(".nav--login");
const modalBox = document.querySelector(".modal-box");
const xBox = document.querySelector(".x-box");

navLogin.addEventListener("click", function(){
  modalBox.style.display = "flex";
});

xBox.addEventListener("click", function(){
  modalBox.style.display = "none";
})
//눌렀을때 마우스 바뀌는 것은 css에서 적용시키기

// 현재 로그인 버튼 클릭시 모달창까지 바뀜

xBox.addEventListener("mouseover", function(){
  this.style.color="red";
})

xBox.addEventListener("mouseout", function(){
  this.style.color="black";
})