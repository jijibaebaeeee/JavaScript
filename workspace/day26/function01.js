//11번 : 일반함수

//매개변수 o, 리턴값o 함수 정의
function getAge(age, num){
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}

console.log(getAge(20,1));
let result = getAge(25,1);

//디폴트 매개변수
function getAge1(name, age, num=1){
  console.log(name, typeof name);
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}

let result2 = getAge1("짱구", 5);
console.log(result2);

let result3 = getAge1("짱구", 5, "안녕");
console.log(result3);

//아이디 비밀번호 이름을 전달받고 이름의 기본값을 사용자로 설정하기
//함수명 : introduce 매개변수o 리턴값x

function introduce(id, pw, name="사용자"){
  console.log(id);
  console.log(pw);
  console.log(name);
}

introduce("jijibae", "01234"); // 668로 8진수 해석되었음, 이것을 막고싶으면 "01234" 로 하기
introduce("jijibae", 1234, "배지수");

//가변 매개변수 : 함수 호출시에 몇개의 값이 전달될지 모를 때 사용한다
function printAdd(...numbers){
  console.log(numbers, typeof numbers);
  // for(let i = 0; i < numbers.length; i++){
  //   console.log(i);
  //   console.log(numbers[i]);
  // }

  //자바 for(자료형 변수명 : 배열명), 스트림 forEach
  //자바 스크립트 for(let 변수명 in 배열명)
  for(let i in numbers){
    console.log(i); // java와 다르게 index 번호가 나옴
  }
  for(let i in numbers){
    console.log(numbers[i]); // 그래서 이렇게 해야함!
  }

}

printAdd(1, 2, 3, 4, 5, 6, 7, 'a');
