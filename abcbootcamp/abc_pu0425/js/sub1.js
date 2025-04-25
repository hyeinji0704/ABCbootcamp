$(function () {
  $('.slide_award').slick({
      slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
      infinite: true, //무한 반복 옵션
      slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
      centerMode: false, // 센터 모드 활성화
      centerPadding: '0', // 가운데 컨텐츠의 패딩 제거
      speed: 1000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows: true, // 옆으로 이동하는 화살표 표시 여부
      dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
      autoplay: false, // 자동 스크롤 사용 여부
      autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      vertical: false, // 세로 방향 슬라이드 옵션
      prevArrow: "<button type='button' class='award_prev'></button>", // 이전 화살표 모양 설정
      nextArrow: "<button type='button' class='award_next'></button>", // 다음 화살표 모양 설정
      dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
      draggable: true, //드래그 가능 여부
      responsive: [ // 반응형 웹 구현 옵션
          {
              breakpoint: 1440, //화면 사이즈 960px
              settings: {
                  //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 1080,
              settings: {
                  //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 750,
              settings: {
                  //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                  slidesToShow: 2,
                  arrows: false,
                  autoplay: true
              }
          },
          {
              breakpoint: 680, //화면 사이즈 480px
              settings: {
                  //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                  slidesToShow: 1,
                  arrows: false,
                  autoplay: true
              }
          },
          {
              breakpoint: 480, //화면 사이즈 480px
              settings: {
                  //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                  slidesToShow: 1,
                  arrows: false,
                  autoplay: true
              }
          }]
  });
});

/*window.addEventListener('scroll', function () {
  const headerHeight = document.querySelector('.header').offsetHeight;
  const sub1Label = document.querySelector('.sub1_label');
  const sub1LabelWrapOffset = document.querySelector('.sub1_label_wrap').offsetTop; // 위치값을 제외한 픽셀값은 css에서 반응형으로 설정해야 함
  const scrollTop = window.scrollY;

  if (scrollTop + headerHeight >= sub1LabelWrapOffset) {
      sub1Label.style.position = 'fixed';
      sub1Label.style.top = `${headerHeight}px`; // 탑에서 헤더크기만큼 띄워서 고정
      sub1Label.style.width = '100%'; // 고정된 위치에서의 너비 유지
  } else if (scrollTop + headerHeight < sub1LabelWrapOffset) {
      sub1Label.style.position = 'static'; // 고정 풀기
  } else {
      sub1Label.style.position = 'static'; // 고정 풀기
  } // 위치값 상태에 따라 else 구문이 필요하지 않을 수 있음,

}) // 서브페이지에서 라벨 상단 고정 스크립트*/

$(function () {
  $('.cur_memb_open').click(function () {
      $('#member_hiding_box').addClass('active');
      $('#member_rolling_box').addClass('active');
  });

  $('.cur_memb_close').click(function () {
      $('#member_hiding_box').removeClass('active');
      $('#member_rolling_box').removeClass('active');
  })
}); // 데이터 탐험가 최하단 청년고용 응원 멤버십 버튼 클릭 시 실행되는 함수

$(document).ready(function () { // sub1 -- 데이터탐험가 페이지 애니메이션
  $(window).on('scroll', function () {
      let ht = $(window).scrollTop();
      let wH = $(window).height();

      const animationClasses = [
          ".cur_reason_card_1", ".cur_reason_card_2", ".cur_reason_card_3", ".cur_reason_card_4",
          ".cur_reason_card_5", ".cur_reason_card_6",".cur_reason_card_7", ".cur_reason_card_8",
      ];

      const maxwidth = matchMedia("screen and (max-width:1080px)");
      const mobilewidth = matchMedia("screen and (max-width:560px)");
      const minwidth = matchMedia("screen and (max-width:400px)");

      if (!minwidth.matches) {
          animationClasses.forEach(function (animationClass) {
              let element = $(animationClass);
              if (element.length) {
                  let elementOffset = $(animationClass).offset().top;
                  if (ht - (elementOffset - wH) >= (maxwidth.matches ? -400 : 100)) {
                      $(animationClass).stop().css({ opacity: "1", transform: "translateY(0)" });
                      if (mobilewidth.matches) {
                          $('.reason_circle_1').stop().css({ width: '365px', height: '365px', overflow: 'auto' });
                          $('.reason_circle_2').stop().css({ width: '268px', height: '268px', overflow: 'visible' });
                          $('.reason_circle_3').stop().css({ width: '164px', height: '164px', overflow: 'auto' });
                      } else {
                          $('.reason_circle_1').stop().css({ width: '505px', height: '505px', overflow: 'auto' });
                          $('.reason_circle_2').stop().css({ width: '372px', height: '372px', overflow: 'visible' });
                          $('.reason_circle_3').stop().css({ width: '228px', height: '228px', overflow: 'auto' });
                      }
                  } else {
                      $(animationClass).stop().css({ opacity: "0", transform: "translateY(100%)" });
                      $('.reason_circle_1, .reason_circle_2, .reason_circle_3').stop().css({ width: '0', height: '0', overflow: 'hidden' });
                  }
              }
          });
      } else {
          animationClasses.forEach(function (animationClass) {
              $(animationClass).stop().css({ opacity: "1", transform: "translateY(0)" });
          });
          $('.reason_circle_1, .reason_circle_2, .reason_circle_3').stop().css({ width: '0', height: '0', overflow: 'hidden' });
      }
  });
});

$(document).ready(function () {
    // 초기 상태 설정 - 애니메이션 비활성화
    $('.bar::after').css('height', '0');
    $('.bar_chart::after').css('width', '0');
    
    // 스크롤 이벤트 감지
    $(window).on('scroll', function () {
        let ht = $(window).scrollTop();
        let wH = $(window).height();
        
        // 첫 번째 그래프(막대 그래프) 컨테이너
        const barGraphContainer = $('.ex_graph_01');
        
        // 두 번째 그래프(선 그래프) 컨테이너
        const lineGraphContainer = $('.ex_graph_content:not(.ex_graph_01)');
        
        // 애니메이션 시작 여부를 저장할 변수
        let hasAnimationStarted = false;
        
        // 막대 그래프 애니메이션 체크
        if (barGraphContainer.length) {
            const barOffset = barGraphContainer.offset().top;
            
            // 요소가 화면에 충분히 보일 때 애니메이션 실행
            if (ht - (barOffset - wH) >= 200 && !barGraphContainer.hasClass('animated')) {
                // 애니메이션 시작 표시
                barGraphContainer.addClass('animated');
                hasAnimationStarted = true;
                
                // 막대 그래프 애니메이션 시작
                barGraphContainer.find('.bar').each(function(index) {
                    const $this = $(this);
                    // 각 막대에 일정한 간격으로 애니메이션 적용 (더 빠른 간격)
                    setTimeout(function() {
                        $this.addClass('animate-active');
                    }, index * 150); // 300ms → 150ms로 간격 감소
                });
                
                // 막대 그래프 애니메이션이 완료된 후 선 그래프 애니메이션 시작 (더 빠른 전환)
                setTimeout(function() {
                    // 선 그래프 컨테이너가 존재하고 화면에 보이는지 확인
                    if (lineGraphContainer.length) {
                        const lineOffset = lineGraphContainer.offset().top;
                        
                        // 선 그래프가 화면에 충분히 보일 때만 애니메이션 실행
                        if (ht - (lineOffset - wH) >= 0) {
                            lineGraphContainer.find('.bar_chart').each(function(index) {
                                const $this = $(this);
                                // 각 선 그래프에 일정한 간격으로 애니메이션 적용 (더 빠른 간격)
                                setTimeout(function() {
                                    $this.addClass('animate-active');
                                }, index * 250); // 500ms → 250ms로 간격 감소
                            });
                        }
                    }
                }, barGraphContainer.find('.bar').length * 150 + 500); // 대기 시간 1000ms → 500ms로 감소
            }
        }
        
        // 스크롤 시 선 그래프만 보이는 경우 처리
        if (!hasAnimationStarted && lineGraphContainer.length && !lineGraphContainer.hasClass('animated')) {
            const lineOffset = lineGraphContainer.offset().top;
            
            // 선 그래프가 화면에 충분히 보일 때 애니메이션 실행
            if (ht - (lineOffset - wH) >= 200) {
                // 애니메이션 시작 표시
                lineGraphContainer.addClass('animated');
                
                // 선 그래프 애니메이션 시작
                lineGraphContainer.find('.bar_chart').each(function(index) {
                    const $this = $(this);
                    // 각 선 그래프에 일정한 간격으로 애니메이션 적용 (더 빠른 간격)
                    setTimeout(function() {
                        $this.addClass('animate-active');
                    }, index * 250); // 500ms → 250ms로 간격 감소
                });
            }
        }
    });
    
    // 페이지 로딩 시 한 번 스크롤 이벤트 트리거
    setTimeout(function() {
        $(window).trigger('scroll');
    }, 300); // 500ms → 300ms로 감소
});