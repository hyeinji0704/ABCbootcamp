// DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
  MainVisual.init();
});
$(document).ready(function(){
  $('.popup').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      //cssEase: 'linear',
      infinite: true, //무한반복
      dots: false, //페이지버튼
      arrows: true, //좌우버튼
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      pauseOnHover:true, //마우스호버시 일시정지
      variableWidth: true, //넓이를 자유롭게 설정
      slidesToShow: 5, //한번에 보일 팝업 수
      slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
      swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
      centerMode: true, //가운데정렬(가운데가 1번)
      responsive: [
          {
            breakpoint: 1300, //1300px 이하
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 375,
            settings: { 
              slidesToShow: 1
            }
          },
      ]
  });
})

/////////////////////////////////////////////////////////////
// 헤더 스크롤 애니메이션
/////////////////////////////////////////////////////////////

window.addEventListener('scroll', function () {
let header = document.querySelector('header'); // 헤더 요소 선택
if (window.scrollY > 0) {
    header.classList.add('active');
} else {
    header.classList.remove('active');
}
});

/////////////////////////////////////////////////////////////
// 헤더 스크롤 애니메이션
/////////////////////////////////////////////////////////////

