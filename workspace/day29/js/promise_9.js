// 9번 : promise

// DB 빈 배열 생성
const DB = [];

// 사용자 정보를 받아서 저장하는 함수
function saveDB(user){
  //DB배열길이(사용자 추가 전)
  const beforeLength = DB.length;
  console.log(beforeLength);

  //사용자 정보를 DB에 추가하고 추가된 후의 배열길이를 반환
  const afterLength = DB.push(user);
  console.log(`저장 ${user.name}`);
  console.log(`사용자 추가 후 배열길이 : ${DB.length}`); // afterLength.length XXXX

  // Promise 객체를 생성해서 반환
  // DB에 사용자 정보를 추가하는 작업이 성공이며 resolve 호출, 실패하면 reject 호출

  return new Promise((resolve, reject) => {
    if(beforeLength < afterLength){
      resolve(user);
    }else{
      reject(new Error("저장되지 않았습니다."))
    }
  });

}
// 사용자 정보를 받아서 이메일 전송 메시지를 출력하는 함수
function sendEmail(user){
  console.log(`이메일 ${user.email} 전송`);

  return new Promise((resolve) => { // 이행되었을 때만 호출하겠다!
    //사용자 정보를 Promise 이행하고 사용자 정보를 resolve 함수에 전달
    resolve(user);
  });
}

// 사용자 정보를 받아서 사용자 이름을 포함한 정보 반환하는 함수
function getResult(user){
  return new Promise((resolve) => {
    resolve(`방문자 ${user.name}`);
  });
}
// 사용자 등록 함수
function register(user){
  //Promise.all 메소드를 사용하여 여러 Promise를 동시에 실행하고 그 결과를 담은 Promise 객체 생성
  const resultAsync = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user),
  ]);
  //resultAsync Promise 객체가 이행될 때 실행
  resultAsync.then(console.log);
}

// 사용자 함수 호출
register({
  name : "홍길동",
  email : "hong111@gmail.com",
});