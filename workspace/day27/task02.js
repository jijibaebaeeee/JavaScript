//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력
// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것

//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력

function check(name, age, callback){
  let check = age >= 19 ? "입장가능" : "입장불가";
  console.log(`${name}님은 ${age}살 입장가능여부는 ${check}`);
  console.log("이벤트 당첨여부");
  callback(age);
}

const ageCheck = function(age){
  if(age === 10){
    console.log("당첨");
  }else{
    console.log("다음 기회에");
  }
};

check("bae",10, ageCheck);
check("bae",18, ageCheck);
check("bae",19, ageCheck);

//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정 ? ? ? ? ?

function passfail(name, score, callback){
  if(score >=60){
    console.log(`${name}님 합격입니다`);
  }else{
    console.log(`${name}님 불합격입니다`);
  }
  callback(score);
}

const scholarship = function(score){
  if(score === 100){
    console.log("장학생입니다.");
  }else{
    console.log("일반학생입니다.");
  }
}

passfail("bae",100,scholarship);
passfail("bae",59,scholarship);
passfail("bae",80,scholarship);


//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F

function getGrade(name, score){
  if(score >= 90){
    console.log(`${name}님의 학점은 A입니다.`);
  }else if(score >= 80){
    console.log(`${name}님의 학점은 B입니다.`);
  }else if(score >= 70){
    console.log(`${name}님의 학점은 B입니다.`);
  }else{
    console.log(`${name}님 F입니다. 공부좀하세요`);
  }
}

getGrade("님",60);
getGrade("님",90);
getGrade("님",80);
getGrade("님",70);

//4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력
function sum(){
  let sum = 0;
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){
      sum += i;
    }
  }
  return sum;
}

console.log(sum());