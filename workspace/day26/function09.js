// 19번 : 재귀함수

// 팩토리얼 : n! 3! => 3 * 2 * 1 = 6

function factorial(n){
  //재귀함수의 종료조건
  if(n === 0){
    return 1;
  }

  //재귀호출
  return n * factorial(n-1);
}

console.log(factorial(5));

//재귀함수를 이용하여 문자열 뒤집기
//hello => olleh 출력
//1) 순수 재귀와 인덱스 사용

function reverseStr(str, index=0){
  
  // 종료 조건
  if(index === str.length){
    return "";
  }

  //현재 문자 뒤에 재귀적으로 처리된 나머지 문자열 추가
  return reverseStr(str, index + 1) + str[index]; 
}

//2) slice 사용
function reveresStr1(str){
  //종료조건
  if(str === "" ||  str.length === 1){
    return str;
  }

  //문자열을 하나씩 처리
  return reveresStr1(str.slice(1)) + str[0];
}

console.log(reveresStr1("hello"));

//3) substr 사용
function reveresStr2(str){
  //종료조건
  if(str === "" ||  str.length === 1){
    return str;
  }

  //substr(1) : 첫번째 문자열을 제거하고 나머지 문자열 반환
  return reveresStr1(str.substr(1)) + str[0];
}
console.log(reveresStr2("hello"));
