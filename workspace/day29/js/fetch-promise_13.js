//13번 fetch.
// fetch는 promise 객체를 반환함.
// promise는 then과 catch를 이용할 수 있다.
// response는 http 응답 메시지를 받고 있음


// fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(console.log);

fetch("https://jsonplaceholder.typicode.com/posts") // 우리가 가지고 오고 싶은 url
.then((response) => {
  //console.log(response.ok); // 잘 받아왔는지의 응답 메시지 확인
  if(!response.ok){
    throw new Error(`response : ${response.status}`)
  }//else{
  //   console.log(response.status); // 200 정상실행 의미
  // }
  return response.json();
}).then((post) => {
  if(!post){
    throw new Error(`none result`);
  }
  return {id : post.id, title:post.title}; //필요한 데이터만 쏙쏙!
}).then(console.log);