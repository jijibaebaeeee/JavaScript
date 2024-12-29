// ## 1. 매개변수로 두 숫자를 전달받아 합을 반환하는 함수를 작성하기
// (디폴트 매개변수 1개 사용 기본값 10)
// ### 일반함수 사용, addNumbers

function getAdd(num1, num2=10){
  return num1+num2;
}

console.log(getAdd(120));


// ## 2. 숫자의 제곱을 계산하는 함수 작성하기
// ### 익명함수 사용, square

let square = function(x){
  return x*x;
}
console.log(square(10));


// ## 3. 가변매개변수를 사용하여 전달받은 모든 숫자의 합 계산하기

// ### sumAll1 일반함수
// sumAll2 익명함수

function sumAll1(...num){
  let sum = 0;
  for(let i of num){
    sum += i;
  }
  return sum;
}

console.log(sumAll1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

let sumAll2 = function(...num){
  let result = 0;
  for(let i in num){
    result += num[i];
  }
  console.log(result);
}

sumAll2(1,2,3,4,5,6,7,8,9,10);

// 4. 콜백함수를 매개변수로 받아 두 숫자를 전달하고 연산결과(사칙연산 모두) 출력하는 oper 만들기

function oper(num1, num2, callback){
  callback(num1, num2);
}

let calculator = function(num1, num2){
  console.log(`더하기 : ${num1 + num2}`);
  console.log(`빼기 : ${num1 - num2}`);
  console.log(`곱하기 : ${num1 * num2}`);
  if(num2 === 0){
    console.log("0으로는 나눌 수 없습니다.")
  }else{
    console.log(`나누기 : ${num1 / num2}`);
    console.log(`나머지 : ${num1 % num2}`);
  }
}

oper(10, 20, calculator);
oper(10, 0, calculator);

// ## 5. 사용자 데이터를 배열로 받아 20살 이상인 사용자만 필터링 하는 newUser 함수 만들기

// ### newUser함수는 두개의 매개변수를 받는다
// users : 사용자 이름 배열(ex : [ { name: '짱구', age: 25 }, { name: '철수', age: 18 }, { name: '훈이', age: 30 } ])
// callback : 데이터를 처리할 함수

function newUser(var1, callback){
  callback(var1);
}

function filtering(var1){
  let result = [];
  for(let i of var1){
    if(i.age >= 20){
      result.push(i); /* 맨 뒤에 푸시*/
    }
  }
  console.log(result);
}

newUser([{ name: '짱구', age: 25 }, { name: '철수', age: 18 }, { name: '훈이', age: 30 }], filtering);


// ### 6. 비동기 작업 체인
// ### 세 가지 작업을 수행하는 step1, step2, step3가 있습니다. 
// 각 함수는 1초 후에 실행하고 runStep 함수에서 각 단계가 완료되면 다음단계로 넘어가고 
// 마지막에는 모든 함수 호출 완료를 출력한다

function getComments(post, callback){
  setTimeout(() => {
    console.log(`${post}의 댓글 가져오기 완료`);
    callback(["댓글1", "댓글2", "댓글3", "댓글4"]);
  }, 1000);
}

function runStep(callback){
  console.log(`작업시작`);
  callback();
  console.log(`모든함수 출력 완료1`);
}

function step1(){
  setTimeout(() => {
    console.log(`step1 작업 완료`);
    // runStep(step2);
    step2();
  }, 1000);
  
}

function step2(){
  setTimeout(() => {
    console.log(`step2 작업 완료`);
    // runStep(step3);
    step3();
  }, 1000);
  
}

function step3(){
  setTimeout(() => {
    console.log(`step3 작업 완료`);
    console.log(`모든함수 출력 완료`);
  }, 1000);
}

runStep(step1);