//4번 : 배열1

//배열 리터럴 대괄호 사용한 빈 배열 생성
let arr1 = [];
console.log(arr1, typeof arr1); //[] object

//배열 내부에 값 삽입(데이터 타입 상관 x)
arr1[0] = 10;
arr1[1] = '가나다';

console.log(arr1, typeof arr1); // [ 10, '가나다' ] object

arr1[10] = true; // 리스트의 크기가 동적이다.
console.log(arr1, typeof arr1); // [ 10, '가나다', <8 empty items>, true ] object

//초기값 할당하여 배열 생성
let arr2 = [1, 2, 3];
console.log(arr2, typeof arr2); // [1, 2, 3] object
console.log(`arr2의 배열길이 : ${arr2.length}`);

//배열 크기 지정한 배열 생성(콤마 개수만큼 배열이 생성)
let arr3 = [, , ,];
console.log(arr3, arr3.length); // [ <3 empty items> ] 3

//Array() 생성자함수로 배열 생성
let arr4 = new Array();
console.log(arr4, arr4.length, typeof arr4); // [] 0 object
arr4[0] = "사과";
arr4[1] = "체리";
arr4[2] = "복숭아";
arr4[3] = "귤";

console.log(arr4, typeof arr4); // [ '사과', '체리', '복숭아', '귤' ] object

//Array() 생성자 함수로 초기값 할당
let arr5 = new Array('0번째 인덱스',1,true);
console.log(arr5); // [ '0번째 인덱스', 1, true ]

let arr6 = new Array(10);
console.log(arr6, arr6.length); // [ <10 empty items> ] 10

//배열 순회시 사용할 수 있는 반복문
// for ... in, for ... of
let arr7 = ['a','b','c','d'];

for(let i in arr7){ // 자바의 일반 for문
  console.log(i); // 인덱스
  //배열명[인덱스번호];
  console.log(arr7[i]);
}

for(let i of arr7){ // 자바의 빠른 for문
  console.log(i);
}