//3번 : 프로토 타입
//new 뒤에 나오는 생성자를 자바스크립트에서는 프로토 타입이라고 부른다
//프로토 타입은 함수로 선언하여 사용한다
//단, 반드시 대문자로 시작해야한다.


function User(id, pw, name, age, subject="javascript"){ 
  this.id = id; // 새 객체의 id 프로퍼티
  this.pw = pw; // 새 객체의 pw 프로퍼티
  this.name = name; 
  this.age = age;
  this.subject = subject;
  //this는 생성된 객체를 참조
  //각 속성은 생성된 객체의 속성이 된다.
}


//자바랑 똑같은 객체 만드는 것(But No Class)
user1 = new User("abc","1234","짱구",5); // 생성자 함수를 호출하여 객체 생성
console.log(user1);

user2 = new User("def","1234","철수",5,"java");
console.log(user2);

//클래스 문법(Class O)
class User1{
  constructor(id, pw, name, age, subject){
    this.id = id; 
    this.pw = pw; 
    this.name = name; 
    this.age = age;
    this.subject = subject;
  }
}

const user3 = new User1("aaa","1234","유리",5, "javascript"); // 클래스를 통해서 객체 생성
console.log(user3, typeof user3);