//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력

//함수명 printStr()  매개변수 1개
//함수명 reverseStr() 콜백사용
// 참고 : split(), reverse(), join()

function printStr(str, callback){
  const arrayStr = [];
  for(let i of str){
    arrayStr.push(i); // 문자열 -> 배열 하나씩 넣기기
  } 
  callback(arrayStr);
}

const reverseStr = function(array){
  let reverse = array.reverse(); // 배열 요소 거꾸로하여 저장
  console.log(reverse.join('')); // 거꾸리 된 요소 붙이고 출력
};

printStr('javascript', reverseStr);

// let array = [];
// let str1 = 'javascript';
// for(let i of str1){
//   array.push(i);
// }
// console.log(array);
// array = array.reverse();
// console.log(array);
// array = array.join('');
// console.log(array);

//2.  성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기

//함수명 welcomeUser

function welcomeUser(last_name, first_name){
  return `${last_name + first_name}님 환영합니다`;
}

console.log(welcomeUser("배","지수"));


//3. 사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환

//함수명 isAdult

function isAdult(age){
  if(age >= 20){
    return true;
  }else{
    return false;
  }
}
// console.log(typeof isAdult(20));
console.log(isAdult(20));


//4. 객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다

class Student{
  constructor(name, age, score){
    this.name = name;
    this.age = age;
    this.score = score;
  }
}

const st1 = new Student('둘리', 5, 80);
const st2 = new Student('도우너', 6, 50);
const st3 = new Student('또치', 5, 90);

const school = [st1, st2, st3]; //이렇게 해도 괜찮은가....?

console.log(school);
//학생마다의 점수 출력
for(let i of school){
  console.log(`이름 : ${i.name}, 점수 : ${i.score}`);
}


//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
//포인트를 모두 더한 값을 출력하라

class Point{
  constructor(point){
    this.point = point;
  }
}

const p1 = new Point(80);
const p2 = new Point(50);
const p3 = new Point(90);

sum = p1.point + p2.point + p3.point;
console.log(sum);