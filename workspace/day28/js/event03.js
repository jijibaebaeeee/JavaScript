const input = document.querySelector("input[type='button']"); // input 태그의 type이 button인 것만 선택
const p = document.querySelector('p');

console.log(input);
console.log(p);

input.addEventListener("click", function(){
  // with(p.style){
  //   //javascript에서 객체의 프로퍼티를 더 간단하게 접근할 수 있게 하는 구문
  //   //특정 객체를 지정하여 그 객체의 프로퍼티를 코드 블록 안에서 직접 참조할 수 있다.
  //   // 카멜표기법 사용
  //   fontSize = "30px";
  //   border = "2px dashed blue";
  //   width = "10px";
  // }

  p.style.fontSize = "30px";
  p.style.border = "2px solid black";
});



// 스타일 적용하는 법
// 함수안에 this.attribute()사용하기. (1개 설정에 적합)
// 한 줄에 하나씩. N개면 N줄 써야함 / 값은 무조건 문자열 형식으로 지정

// addEventListener() 안에서
// with()문으로 접근하기 ★
// -> 한방에 여러 스타일을 바꿀 수 있음 / 값은 무조건 문자열 형식으로 지정

// addEventListener() 안에서
// 참조변수.style.속성 = 값 / 값은 무조건 문자열 형식으로 지정