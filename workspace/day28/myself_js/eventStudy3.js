// 목표
// input 태그의 button을 누르면 
// p 태그의 fontSize = 30px,
// border를 2px solid black으로 할 것. 
// 스타일 적용에 2가지 방법이 있다.

const btn = document.querySelector("input[type='button']");
// const p = document.getElementsByTagName('p');
const p = document.querySelector('p');

console.log(btn);
console.log(p);

btn.addEventListener('click', function(){
  //NodeList + with()로 사용한 경우
  with(p.style){
    fontSize = "30px";
    border = "2px solid black";
    backgroundColor = 'lightgreen';
  }


  // //NodeList로 사용한 경우 요소 자체 출력
  // p.style.fontSize = "30px";
  // p.style.border = "2px solid black";

  // //HTMLCollectiond으로 사용한 경우 인덱스 접근 필요
  // p[0].style.fontSize = "30px";
  // p[0].style.border = "2px solid black";
})

// 결과 : 스타일 수정하려면 태그를 포함한 풀 내용이 필요하다.