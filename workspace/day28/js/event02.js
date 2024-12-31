const boxClick = document.querySelector("#click");
const boxOver = document.querySelector("#over");
const boxOut = document.querySelector("#out");
const boxOverOut = document.querySelector("#over-out");

// console.log(boxClick);
// console.log(boxOver);
// console.log(boxOut);
// console.log(boxOverOut);
function changeBgGreen(){
  // boxClick.setAttribute("style", "background-color:green") // 속성을 추가해주는 것
  // console.log(this);
  //this는 현재 이벤트가 걸린 자기 자신을 의미한다
  this.setAttribute("style", "background-color:green")
}

boxClick.addEventListener("click",changeBgGreen);

boxOver.addEventListener("mouseover", function(){ // mouseover라는 것이 발생하면 걸리는 이벤트
  boxOver.setAttribute("style", "background-color:skyblue");
});

function changeBgPink(){
  this.setAttribute("style", "background-color:pink");
  console.log(this);
}

boxOut.addEventListener("mouseout", changeBgPink); // 마우스를 벗어나면 발생하는

boxOverOut.addEventListener("mouseover", changeBgGreen); // 마우스 위에 있을 때
boxOverOut.addEventListener("mouseout", changeBgPink); // 마우스 벗어날 때 모두 적용