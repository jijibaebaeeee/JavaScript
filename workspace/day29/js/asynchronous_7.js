// 7번 : 비동기

function func1(){
  console.log("함수 1실행");
  func2();
}

function func2(){
  setTimeout(function() {
    console.log("함수 2실행");
  }, 1000)
  func3();
}

function func3(){
  setTimeout(function() {
    console.log("함수 3실행");
  }, 5)
}

func1();