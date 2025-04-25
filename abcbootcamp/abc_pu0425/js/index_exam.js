// 메인 비주얼 텍스트 애니메이션
document.addEventListener('DOMContentLoaded', function() {
  const typingTitle = document.querySelector('.typing_title');
  const typingElement = document.querySelector('.typing');
  const typingP = typingTitle.querySelector('p');
  
  if (!typingTitle || !typingElement) {
      console.error("Typing elements not found");
      return;
  }
  
  // 문자열 배열
  const strings = ['데이터 탐험가;', 'ABC 프로젝트 멘토링;', '딥다이버;'];
  const widthMap = {};
  
  // 너비 측정을 위한 임시 요소
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
  
  // 패딩 비율 설정 (오른쪽 패딩이 왼쪽의 1.2배)
  const basePaddingLeft = 20;
  const basePaddingRight = basePaddingLeft * 2.6; // 1.2배 크게 설정
  
  // 너비 및 패딩 조절 함수
  function adjustWidth(width, duration = 500) {
      // 현재 폰트 크기를 기준으로 패딩 계산 (반응형 대응)
      const currentFontSize = parseFloat(window.getComputedStyle(typingElement).fontSize);
      const fontRatio = currentFontSize / 94; // 기준 폰트 사이즈(94px)에 대한 비율
      
      // 현재 폰트 크기에 맞게 패딩 조정
      const paddingLeft = Math.round(basePaddingLeft * fontRatio);
      const paddingRight = Math.round(basePaddingRight * fontRatio);
      
      // p 태그에 패딩 적용
      typingP.style.paddingLeft = paddingLeft + 'px';
      typingP.style.paddingRight = paddingRight + 'px';
      
      // 총 패딩 합계
      const totalPadding = paddingLeft + paddingRight;
      
      // p 태그의 너비 조정 (애니메이션 적용)
      typingP.style.transition = `width ${duration}ms ease-out`;
      typingP.style.width = (width + totalPadding) + 'px';
  }
  
  // 반응형 대응을 위한 리사이즈 이벤트 리스너
  function handleResize() {
      // 현재 활성화된 문자열 찾기
      const activeIndex = typed.arrayPos || 0;
      const currentString = strings[activeIndex];
      
      // 현재 폰트 크기에 따라 너비 재계산
      const currentFontSize = parseFloat(window.getComputedStyle(typingElement).fontSize);
      const fontRatio = currentFontSize / 94;
      const adjustedWidth = Math.ceil(widthMap[currentString] * fontRatio);
      
      // 새 너비로 업데이트 (애니메이션 없이)
      adjustWidth(adjustedWidth, 0);
  }
  
  // 리사이즈 이벤트에 대응
  window.addEventListener('resize', handleResize);
  
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
          // 현재 폰트 크기 기준으로 너비 계산
          const currentFontSize = parseFloat(window.getComputedStyle(typingElement).fontSize);
          const fontRatio = currentFontSize / 94;
          
          const currentString = self.strings[arrayPos];
          const baseWidth = widthMap[currentString];
          const adjustedWidth = Math.ceil(baseWidth * fontRatio);
          
          // 애니메이션 적용
          adjustWidth(adjustedWidth, 500);
      }
  });
  
  // 초기 너비 설정
  const initialWidth = widthMap[strings[0]];
  adjustWidth(initialWidth, 0);
});


// 메인 리뷰 슬라이드
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
          breakpoint: 1041, //1041px 이하
          settings: {
            slidesToShow: 2,
            centerMode: false, //가운데정렬 해제
            speed: 600 // 태블릿 속도 조정
          }
        },
        {
          breakpoint: 500, // 모바일
          settings: { 
            slidesToShow: 1,
            centerMode: false, //가운데정렬 해제
            speed: 700 // 모바일 속도 조정
          }
        },
    ]
  });
})

// 헤더 스크롤 애니메이션

window.addEventListener('scroll', function () {
let header = document.querySelector('header'); // 헤더 요소 선택
if (window.scrollY > 0) {
    header.classList.add('active');
} else {
    header.classList.remove('active');
}
});


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

$(document).ready(function () {
  $(".main_title_ani_1").addClass("on"); // 메인페이지 텍스트 애니메이션
  $(".main_title_ani_2").addClass("on"); // 메인페이지 텍스트 애니메이션
  $(".main_title_ani_3").addClass("on"); // 메인페이지 텍스트 애니메이션
  $(".bold_semi").addClass("on"); // 서브페이지 텍스트 애니메이션
  $(".medium_semi").addClass("on"); // 서브페이지 텍스트 애니메이션
  $(".cur_main").addClass("on");
});