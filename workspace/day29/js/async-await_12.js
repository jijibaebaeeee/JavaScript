//12번

// async function getName() {
//   return "짱구";
// }

// async function printName(){
//   const name = await getName(); // getName 의 작업이 끝나면 이 함수를 실행하겠다.
//   console.log(name);
// }

// printName();

//2초후에 데이터를 반환하는 비동기함수 작성
async function fetchData() {
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve("데이터 로드 완료");
    }, 2000);
  });
}

async function printData() {
  const data = await fetchData();
  console.log(data);
}

printData();
//then catch나 console.log가 무조건 필요하다! (뭔지모름)ㅋㅋ