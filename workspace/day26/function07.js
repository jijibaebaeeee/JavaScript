// 17번 : 화살표함수 ★★

const add = (num1, num2) => num1 + num2;
console.log(add(3,5));

//이름과 나이를 매개변수로 받아 출력하는 화살표함수
//함수명 : printinfo
const printInfo = (name, age) => console.log(`저의 이름은 ${name}이고, 나이는 ${age}살 입니다.`)

printInfo(`배지수`, 26);

//매개변수 1개경우 소괄호 생략 가능
const square = x => x * x;
console.log(square(5));

//매개변수 0개인경우 빈 소괄호 사용
const greet = () => 'hello! 2025!';
console.log(greet());

//여러줄 코드가 필요한 경우 중괄호 사용
const sumArray = (arr) => {
  let sum = 0;
  for(let num of arr){ // of를 쓰면 인덱스가 아닌 값을 리턴함, in을 쓰면 인덱스를 리턴함
    sum += num;
  }
  return sum;
};

console.log(sumArray([1, 2, 3]));

//두 정수의 곱셈을 구한 뒤 결과에 3을 곱해서 출력하기

const getResult = (num1, num2) => console.log((num1 * num2) + 3);
getResult(5,3);

const mul1 = (num1, num2, callback) => {
  const result = num1 * num2;
  callback(result);
}

const multi = result => console.log(result * 3);

mul1(2, 2, multi);