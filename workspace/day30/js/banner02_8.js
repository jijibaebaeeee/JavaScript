// banner01_8을 jquery로 바꿔보기
// html은 그냥 banner01_8 사용
let $slideBox = $(`.slide-box`);
let $slideImg = $(`.slide-Img`);

//슬라이드 너비, 현재 인덱스, 슬라이드 개수 설정
let slideWidth = 800;
let currentIdx = 0;
let $slideCnt = $slideImg.length; 

//슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 표시 or 숨김처리

///수정필요!!!!! banner01-2인듯