let testImg = document.getElementsByClassName("test-img");
console.log(testImg);

let bigImgWrap = document.getElementsByClassName("big-img-wrap");

// 모든 이미지 요소에 클릭 이벤트 줘야하기 위해서 반복문 사용

for(let i = 0; i < testImg.length; i++){
  // console.log(testImg[i]);
  testImg[i].addEventListener('click', function(){
    let src = this.getAttribute("src"); // this(이 객체에서) 사진 경로만(src) 뽑아왔음
    console.log(src); //경로 잘 나옴
    console.log(this);

    let bigImg = document.querySelector(".big-img");
    // console.log(bigImg);
    bigImg.setAttribute("src",src);
    bigImgWrap[0].style.display = "flex";
  })
  
  // 다른 곳 클릭하면 다시 나가져야하니까 새로운 이벤트 추가!
  bigImgWrap[0].addEventListener("click", function(){
    this.style.display = "none";
  });

}
