let $boxes = $(`.div-box`);
console.log($boxes);

console.log($boxes[2]); // jQuery 객체에서 인덱스를 사용하여 접근한 요소는 일반적인 DOM 요소로 반환된다.
                        // 따라서 jQuery 객체가 아닌 순수 DOM 객체이다

// let element = $boxes[1];
// console.log(element);
// element.style.backgroundColor = "red"; 

console.log($boxes.eq(2));
$boxes.eq(2).css('background-color', "red"); // No 카멜표기법.
// jquery 변수를 이용하여 css를 변경할 때는 .css()메소드를 사용한다


//jquery 이용하여 사용할것
//1. li태그 전체 가져오기
let $lies = $(`li`);
console.log($lies);

//2. 클래스 이름이 product인 태그 전체 가져오기
let $product = $(`.product`);
console.log($product);

//3. 자식 태그 중 첫번째 자식 가져오기
let $all = $(`html`);
console.log($all.first());

let $all_2 = $(`html`).first() 
console.log($all_2);

let $boxesChild = $(`.div-box`).children().first(); // 없는 값일 때는 길이가 0으로 나옴
console.log($boxesChild);

//4. ul 태그의 부모태그 가져오기
let $ul = $(`ul`).parent();
console.log($ul);

//5. li태그의 부모태그 가져오기
let $liesParent = $(`li`).parent();
console.log($liesParent); //ul.product

//6. ul 태그 자식 중에서 0번째 인덱스 가져오기
let $ul_first = $(`ul`).children().eq(0);
console.log($ul_first);

//7. ul 태그 자식 중에서 2번째 인덱스 가져오기
let $ul_second = $(`ul`).children().eq(1);
console.log($ul_second);

console.log($(`ul > li:first-child`));
console.log($(`ul > li:nth-child(1)`)); // css 선택자로 선택이 가능
console.log($(`ul`).find(`li`).first()); // find + first 조합