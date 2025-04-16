 // 메인 비주얼 텍스트 전환 애니메이션
 const MainVisual = {
    init: function () {
        this.mv = document.querySelector("#mv");
        if (!this.mv) {
            console.error("Main visual element (#mv) not found");
            return;
        }
        this.changeWords = this.mv.querySelector(".change_words");
        this.wordBox = this.changeWords.querySelector(".word_box");
        this.words = Array.from(this.changeWords.querySelectorAll(".change_word"));

        // 각 단어의 글자를 span으로 감싸기
        this.words.forEach((word) => {
            const originalText = word.textContent.trim();
            const frag = document.createDocumentFragment();
            
            originalText.split("").forEach((char) => {
              const span = document.createElement("span");
              span.classList.add("char");
          
              // 세미콜론이면 semicolon 클래스 추가
              if (char === ";") {
                  span.classList.add("semicolon");
              }
          
              span.textContent = char;
              frag.append(span);
          });
            
            word.innerHTML = "";
            word.append(frag);
        });

        // 단어 전환 로직
        let currentIndex = 0;
        const totalIndex = this.words.length - 1;

        const changeWord = () => {
            // 이전 단어 숨기기
            this.words.forEach((word) => word.classList.remove("on"));

            // 다음 단어 표시
            const activeWord = this.words[currentIndex];
            
            // offsetWidth 계산 전 표시 상태로 업데이트
            activeWord.classList.add("on");

            // 브라우저 리플로우 기다리기
            requestAnimationFrame(() => {
                const wordWidth = Math.ceil(activeWord.offsetWidth);
                this.wordBox.style.width = wordWidth + "px";
            });

            // 다음 인덱스로 이동
            currentIndex = (currentIndex + 1) > totalIndex ? 0 : currentIndex + 1;

            // 다음 전환 예약
            this.timer = setTimeout(changeWord, 3200);
        };

        // 초기 너비 설정 및 첫 번째 단어 활성화
        requestAnimationFrame(() => {
            const initialWord = this.words[0];
            initialWord.classList.add("on");
            this.wordBox.style.width = Math.ceil(initialWord.offsetWidth) + "px";
            
            // 첫 전환 시작 (첫 단어가 이미 표시됐으므로 인덱스 변경)
            currentIndex = 0;
            setTimeout(changeWord, 3200);
        });
    }
};

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

window.addEventListener("DOMContentLoaded", () => {
  const bgVideo = document.querySelector(".main_bg_video");
  if (bgVideo) {
    bgVideo.setAttribute("preload", "auto");
    bgVideo.load();
  }
});