document.addEventListener('DOMContentLoaded', function() {
  const typingTitle = document.querySelector('.tiping_title');
  const typingElement = document.querySelector('.typing');
  const typingP = typingTitle.querySelector('p');
  
  if (!typingTitle || !typingElement) {
      console.error("Typing elements not found");
      return;
  }
  
  // 문자열 배열과 너비를 미리 계산하기 위한 맵
  const strings = ['데이터 탐험가;', 'ABC 프로젝트 멘토링;', '딥다이버;'];
  const widthMap = {};
  
  // 보이지 않는 요소에 텍스트를 렌더링하여 각 문자열의 최종 너비를 미리 계산
  const measureElement = document.createElement('span');
  measureElement.style.cssText = `
      position: absolute;
      visibility: hidden;
      white-space: nowrap;
      font-family: Interop;
      font-size: 94px;
      font-weight: 800;
      letter-spacing: -2.35px;
  `;
  document.body.appendChild(measureElement);
  
  // 각 문자열의 너비 미리 계산
  strings.forEach(str => {
      measureElement.textContent = str.replace(';', '');
      widthMap[str] = Math.ceil(measureElement.offsetWidth);
  });
  
  document.body.removeChild(measureElement);
  
  // 패딩과 내부 여백 설정
  const pPadding = 80; // p 태그 양쪽 패딩 합계 (40px + 40px)
  
  // 너비 조절 함수 - p 태그의 너비만 조정
  function adjustWidth(width, duration = 500) {
      // p 태그의 너비만 변경
      typingP.style.transition = `width ${duration}ms ease-out`;
      typingP.style.width = (width + pPadding) + 'px';
  }
  
  // typed.js 초기화
  var typed = new Typed('.typing', {
      strings: strings,
      typeSpeed: 120,
      backSpeed: 60,
      startDelay: 300,
      backDelay: 1500,
      autoStart: true,
      breakLines: false,
      loop: true,
      preStringTyped: function(arrayPos, self) {
          // 타이핑 시작 전에 p 태그 너비 애니메이션 시작
          const currentString = self.strings[arrayPos];
          const targetWidth = widthMap[currentString];
          adjustWidth(targetWidth, 500);
      }
  });
  
  // 초기 너비 설정
  const initialWidth = widthMap[strings[0]];
  adjustWidth(initialWidth, 0);
});
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
            breakpoint: 1040, //1300px 이하
            settings: {
              slidesToShow: 2,
              centerMode: false //가운데정렬 해제,
            }
          },
          {
            breakpoint: 375,
            settings: { 
              slidesToShow: 1,
              centerMode: false //가운데정렬 해제,
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

// 메뉴
function allMenu() {
    $(".nav").addClass("on");
    $(".dim").show();
    $("body").addClass("open");
}

function allMenuClose() {
    $(".nav").removeClass("on");
    $(".dim").hide();
    $("body").removeClass("open");
}