// 5번 : 배열 메소드

let numbers = [10, 5, 3, 2, 7, 9];
console.log(numbers, typeof numbers);

//.push() : 가장 마지막에 값 추가
numbers.push(100);
numbers.push(900);
console.log(numbers);

//.join() : 전달한 값으로 구분한 뒤  문자열로 리턴
console.log([1, 2, 3, 4, 5]);
console.log([1, 2, 3, 4, 5].join("  "), typeof [1, 2, 3, 4, 5].join("  "));
str = [1, 2, 3, 4, 5].join("  ");
console.log(str.length);

//.slice(시작, 끝) : 원하는 부분을 추출하기 위해서 시작 인덱스와 마지막 인덱스를 전달한다
// 마지막 인덱스는 포함되지 않는다
let number2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(number2, typeof number2);
// 인덱싱 : 배열명[인덱스번호] 하나의 값만 추출할 때 사용
console.log(number2[0], typeof number2[0]); // 1 number
// 슬라이싱 : 여러 개 값을 추출할 때 사용
console.log(number2.slice(0, 1), typeof number2.slice(0, 1)); //[ 1 ] object
console.log(number2.slice(2, 8)); // [ 3, 4, 5, 6, 7, 8 ]
// console.log(number2.slice[(2,5)]); // undefined
//slice[(2,5)] => slice[5] 처럼 접근하는 것으로 해석되는데 함수가 배열로 접근되어 undefined로 결과 출력된다
//slice는 두 개의 정수를 매개변수로 받는다 [2, 5] 첫번째 매개변수로 처리되고 두번째 매개변수는 undefined로 처리된다.

//.pop() : 마지막 요소를 삭제하며 그 값을 반환
console.log(number2.pop()); // [1, 2, 3, 4, 5, 6, 7]
console.log(number2);

//.shift() : 첫 번째 요소를 삭제하며 그 값을 반환
console.log(number2.shift()); // [ 2, 3, 4, 5, 6, 7]
console.log(number2);

//.splice(인덱스번호, 개수) : 인덱스번호 삭제(무조건 2개의 매개변수 필요)
console.log(number2.splice(2,1)); // [ 4 ]

//.splice(개수) : 매개변수를 1개만 전달하면 0번째 인덱스부터의 개수로 인식하여 삭제된다
console.log(number2.splice(2)); // [5, 6, 7]

//.indexOf(값) : 값을 array(기존배열)에서 찾은 뒤 인덱스 번호를 반환, 값을 못 찾으면 -1반환
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2);
console.log(numbers2.indexOf(2)); // 1
console.log(numbers2.indexOf(3)); // 2
console.log(numbers2.indexOf(10)); // -1

const numbers3 = [1, 1, 1, 2, 3];
console.log(numbers3.indexOf(1)); // 가장 앞에있는 인덱스 번호 반환 -> 0



//.fill(값) : 배열의 모든 요소를 해당 값으로 채우기
//.fill(값, 시작인덱스, 종료인덱스) : 
const numbers4 = new Array(5).fill(10, 2, 4);
console.log(numbers4); // [ <2 empty items>, 10, 10, <1 empty item> ]


//반복문 : forEach(callback) ★★★★★
numbers3.forEach(function (element, index, array){
  // console.log(element); // 값 출력
  // console.log(index); // 인덱스 출력
  console.log(array); //원본 배열 출력
});