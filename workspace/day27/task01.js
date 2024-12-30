//1. 학생의 정보를 저장하는 객체를 만들고 그 학생의 정보를 출력하기
//학생정보 : 이름, 나이, 성적(1과목)

class Student{
  constructor(name, age, grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}


//1) 객체에 최소 3명의 데이터를 추가하고 이름과 성적 출력하기
const st1 = new Student("배", 26, 'A');
const st2 = new Student("박", 20, 'A');
const st3 = new Student('최', 22, 'A+');

const students = [st1, st2, st3]; // ★★

students.forEach(student => {
  console.log(`이름 : ${student.name}, 성적 : ${student.grade}`);
});

//2) 객체에서 이름 키에 해당하는 값들만 출력하기
console.log(st1.name);
console.log(st2.name);
console.log(st3.name);

//3) 객체에 새로운 속성(학년)을 추가하고 객체 전체 출력하기(for문 사용)
class Student2{
  constructor(name, age, grade, year){
    name = this.name;
    age = this.age;
    grade = this.grade;
    year = this.year;
  }
}

const st4 = new Student2("배", 26, 'A', 1);
const st5 = new Student2("박", 20, 'B', 2);
const st6 = new Student2('최', 22, 'A+', 3);

for(let i in st4){
  console.log(st4[i]);
}

//2. 배열의 모든 요소를 2배로 증가시켜 새로운 배열을 만들어 출력하기
const numbers = [1, 2, 3, 4, 5];
//1) 2배 증가시켜 새로운 배열로 출력하기 -> forEach로 하는 방법과 map을 써서 하는 방법에 차이가 있음
//                                        forEach는 빈 배열을 선언하고 .push()를 이용해서 값을 넣어줘야하고
//                                        map은 배열 선언 없이 바로 = 을 이용해서 값을 넣을 수 있음 ★★

// [forEach를 사용하는 방법]
// const twiceNumbers = []; // 빈 배열 선언 필수

// numbers.forEach(function(element){
//   twiceNumbers.push(element * 2);
// })
// console.log(twiceNumbers);

//[map을 사용하는 방법]
const twiceNumbers = numbers.map(function(element){
  return (element * 2);
});
console.log(twiceNumbers);

//2) 배열의 길이를 구하고 출력하기
console.log(numbers.length);

//3) 배열에서 특정요소를 삭제하기(3) 메소드 사용
console.log(numbers.splice(2,1));
console.log(numbers);

//4) 배열에서 특정 값(cat)을 검색하고 그 값의 인덱스 출력하기
const animals = ['dog', 'cat', 'rabbit'];
console.log(animals.indexOf('cat'));

//5) 배열의 첫번째와 마지막요소를 제거한 뒤 남은 배열 출력하기
const colors = ['red', 'blue', 'green', 'yellow'];


//3. 혼합문제
//1) 배열의 요소를 객체로 변환하여 새로운 배열을 만들기
//  주어진 배열의 값을 객체의 value 속성으로 저장할것
const data = [10, 20, 30];

//2) 배열을 활용하여 특정값을 기준으로 객체 업데이트하기
const users = [
  {id : 1, name : "짱구", age : 5, subject : 'javascript'},
  {id : 2, name : "철수", age : 5, subject : 'javascript'},
  {id : 3, name : "맹구", age : 5, subject : 'javascript'}, 
];
//id가 2인 객체의 나이를 6으로 변경, subject를 'web표준'으로 변경

//3) 배열의 요소를 모두 더하여 총합 출력하기
const numbers2 = [2, 5, 20, 10];
