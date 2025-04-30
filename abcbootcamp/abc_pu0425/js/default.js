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
    let video = document.querySelector('.video');// getElementsByClass(".video");
    if (video) {
        console.log("[ 배속설정 0.2 ]")
        video.playbackRate = 0.2;
    }


    // 슬라이더
    $('.slide_reviews').slick({
        slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
        infinite: true, //무한 반복 옵션
        slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        speed: 1000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true, // 자동 스크롤 사용 여부
        autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false, // 세로 방향 슬라이드 옵션
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
        dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
        draggable: true, //드래그 가능 여부
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, //화면 사이즈 480px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }]
    });


    $('.slide_prize').slick({
        slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
        infinite: true, //무한 반복 옵션
        slidesToShow: 2, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        speed: 1000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true, // 자동 스크롤 사용 여부
        autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false, // 세로 방향 슬라이드 옵션
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
        dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
        draggable: true, //드래그 가능 여부
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, //화면 사이즈 480px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }]
    });



});

// 멥버십 로고 롤링
//DOM 생성 후
var originalID, cloneID; //인터벌 포인터
window.addEventListener('DOMContentLoaded', function () {

    //롤링 배너 복제본 생성
    let roller = document.querySelector('#rolling1 .roller');
    if (!roller) {
        return;
    }
    roller.id = 'roller1';

    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    document.querySelector('#rolling1 .wrap').appendChild(clone); //부착

    //원본, 복제본 배너 위치 지정
    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('#rolling1 .roller ul').offsetWidth + 'px';

    //클래스 할당
    roller.classList.add('original');
    clone.classList.add('clone');

    //인터벌 메서드로 애니메이션 생성
    let rollerWidth = document.querySelector('#rolling1 .roller ul').offsetWidth;//회전 배너 너비값
    let betweenDistance = 1;//이동 크기 - 정수여야 함
    originalID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector('#roller1'));
    cloneID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector('#roller2'));

    //인터벌 애니메이션 함수(공용)
    function betweenRollCallback(d, roller) {
        let left = parseInt(roller.style.left);
        roller.style.left = (left - d) + 'px';
        //조건부 위치 리셋
        if (rollerWidth + (left - d) <= 0) {
            roller.style.left = rollerWidth + 'px';
        }
    }
});

var originalID, cloneID; //인터벌 포인터
window.addEventListener('DOMContentLoaded', function () {

    //롤링 배너 복제본 생성
    let roller = document.querySelector('#rolling2 .roller');
    if (!roller) {
        return;
    }
    roller.id = 'roller3';

    let clone = roller.cloneNode(true);
    clone.id = 'roller4';
    document.querySelector('#rolling2 .wrap').appendChild(clone); //부착

    //원본, 복제본 배너 위치 지정
    document.querySelector('#roller4').style.right = '0px';
    document.querySelector('#roller3').style.right = document.querySelector('#rolling2 .roller ul').offsetWidth + 'px';

    //클래스 할당
    roller.classList.add('original');
    clone.classList.add('clone');

    //인터벌 메서드로 애니메이션 생성
    let rollerWidth = document.querySelector('#rolling2 .roller ul').offsetWidth;//회전 배너 너비값
    let betweenDistance = 1;//이동 크기 - 정수여야 함
    originalID = window.setInterval(betweenRollCallback, parseInt(1920 / 100), betweenDistance, document.querySelector('#roller3'));
    cloneID = window.setInterval(betweenRollCallback, parseInt(1920 / 100), betweenDistance, document.querySelector('#roller4'));

    //인터벌 애니메이션 함수(공용)
    function betweenRollCallback(d, roller) {
        let right = parseInt(roller.style.right);
        roller.style.right = (right - d) + 'px';
        //조건부 위치 리셋
        if (rollerWidth + (right - d) <= 0) {
            roller.style.right = rollerWidth + 'px';
        }
    }
});

var originalID, cloneID; //인터벌 포인터

window.addEventListener('DOMContentLoaded', function () {

    //롤링 배너 복제본 생성
    let roller = document.querySelector('#rolling3 .roller');
    if (!roller) {
        return;
    }
    roller.id = 'roller5';

    let clone = roller.cloneNode(true);
    clone.id = 'roller6';
    document.querySelector('#rolling3 .wrap').appendChild(clone); //부착

    //원본, 복제본 배너 위치 지정
    document.querySelector('#roller5').style.left = '0px';

    document.querySelector('#roller6').style.left = document.querySelector('#rolling3 .roller ul').offsetWidth + 'px';

    //클래스 할당
    roller.classList.add('original');
    clone.classList.add('clone');

    //인터벌 메서드로 애니메이션 생성
    let rollerWidth = document.querySelector('#rolling3 .roller ul').offsetWidth;//회전 배너 너비값
    let betweenDistance = 1;//이동 크기 - 정수여야 함

    originalID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector('#roller5'));
    cloneID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector('#roller6'));

    //인터벌 애니메이션 함수(공용)
    function betweenRollCallback(d, roller) {
        let left = parseInt(roller.style.left);
        roller.style.left = (left - d) + 'px';
        //조건부 위치 리셋
        if (rollerWidth + (left - d) <= 0) {
            roller.style.left = rollerWidth + 'px';

        }
    }
});

// FAQ 아코디언
class Accordion {
    constructor(options) {
        // 기본 옵션과 사용자 지정 옵션을 병합
        this.config = Accordion.mergeConfig(options);
        this.accordion = document.querySelector(this.config.selector);
        // 이벤트 핸들러 내부의 this는 currentTarget
        if(!this.accordion) return;
        this.accordion.addEventListener('click', this.toggle.bind(this));
    }

    static mergeConfig(options) {
        // 기본 옵션
        const config = {
            selector: '#accordion',
            multi: true
        };

        return {...config, ...options};
    }

    toggle(event) {
        if (!event.target.classList.contains('acc_title')) return;
        // click 이벤트를 발생시킨 <div class="acc_title"> 요소의 부모 요소인 li 요소
        const targetLi = event.target.parentNode;

        // 멀티 오픈을 허용하지 않으면 타깃 이외의 모든 서브메뉴를 클로즈한다.
        //   if (!this.config.multi) {
        //     [].filter.call(
        //       this.accordion.childNodes,
        //       li => li.nodeType === Node.ELEMENT_NODE && li !== targetLi
        //     ).forEach(li => li.classList.remove('show'));
        //   }

        // li 요소의 class에 "show"가 있으면 제거하고 없으면 추가한다.
        targetLi.classList.toggle('show');
    }
}

window.onload = function () {
    const accordion = new Accordion({multi: false});
// const accordion = new Accordion();
};

// 신청하기 자주 묻는 질문
class edu_que_lists {
    constructor(options) {
        // 기본 옵션과 사용자 지정 옵션을 병합
        this.config = edu_que_lists.mergeConfig(options);
        this.accordion = document.querySelector(this.config.selector);
        
        // 요소가 존재하는지 확인
        if(!this.accordion) return;
        
        // 이벤트 리스너 추가
        this.accordion.addEventListener('click', this.toggle.bind(this));
    }

    static mergeConfig(options) {
        // 기본 옵션
        const config = {
            selector: '#edu_que_lists',
            multi: true
        };

        return {...config, ...options};
    }

    toggle(event) {
        // 클릭한 요소 또는 그 부모가 edu_que_title인지 확인
        const titleElement = event.target.closest('.edu_que_title');
        if (!titleElement) return;
        
        // edu_que_title의 부모 요소인 edu_que_list 요소
        const targetQueList = titleElement.closest('.edu_que_list');
        
        // 멀티 오픈을 허용하지 않는 경우
        if (!this.config.multi) {
            const allQueLists = this.accordion.querySelectorAll('.edu_que_list');
            allQueLists.forEach(item => {
                if (item !== targetQueList) {
                    item.classList.remove('list_show');
                }
            });
        }
    
        // edu_que_list 요소의 class에 "list_show"가 있으면 제거하고 없으면 추가
        targetQueList.classList.toggle('list_show');
    }
}

window.onload = function () {
    const accordion = new edu_que_lists({multi: false});
};


// 메인 popup 스크립트 //////////////////////////////////////////////////////////
// 쿠키 생성
function setCookie(name, value, expiredays) {  // 쿠키저장
    var todayDate = new Date();  //date객체 생성 후 변수에 저장
    todayDate.setDate(todayDate.getDate() + expiredays);
    // 시간지정(현재시간 + 지정시간)
    document.cookie = name + "=" + value + "; path=/; expires=" + todayDate.toUTCString() + ";"
    //위 정보를 쿠키에 굽는다
}

$(function () {
    if ($(".popup_box").length > 0) {
        //$(".popup_box").draggable({containment:'parent', scroll:false}); // 레이어 팝업 창 드래그 불가능
        for (var i = 0; i < $(".popup_box").length; i++) {
            var idx = i + 1;
            if (document.cookie.indexOf("popToday" + idx + "=close") < 0) {      // 쿠키 저장여부 체크
                document.getElementById("popup_layer" + idx).style.display = "block";
            } else {
                document.getElementById("popup_layer" + idx).style.display = "none";
            }
        }
    }
});

//오늘하루 그만보기 닫기버튼 스크립트
function closeToday(idx) {
    setCookie("popToday" + idx, "close", 1);
    $("#popup_layer" + idx).css("display", "none");
    document.getElementById("popup_layer" + idx).style.display = "none";
}

//닫기버튼 스크립트
function closePop(idx) {
    document.getElementById("popup_layer" + idx).style.display = "none";
}

// 메인 popup 스크립트:End //////////////////////////////////////////////////////////


//  air-datepicker  //////////////////////////////////////////////////////////
var datepickerDefault = {
    dateFormat: 'yyyy-mm-dd',
    timeFormat: 'hh:ii',
    view: "days",
    autoClose: true,
    language: "ko",
    navTitles: {
        days: '<i>yyyy</i>, MM',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    }
}

$(document).ready(function () {
    if ($('script[src$="datepicker.js"]').length > 0) {
        /* air-datepicker 사용 */
        ;
        (function ($) {
            $.fn.datepicker.language['ko'] = {
                days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
                daysShort: ["일", "월", "화", "수", "목", "금", "토"],
                daysMin: ["일", "월", "화", "수", "목", "금", "토"],
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                today: '오늘',
                clear: '삭제',
                dateFormat: 'yyyy-mm-dd',
                timeFormat: 'hh:ii',
                firstDay: 0
            };
        })(jQuery);
        fnBDatepickerMake($('.air-datepicker'));
    }
});

function fnBDatepickerMake(ele) {
    if ($(ele).length > 0) {
        if ($(ele).hasClass('form-control')) {
            $(ele).removeClass('form-control');
            $(ele).datepicker(datepickerDefault).wrap('<div class="search-date"><span class="form-control datepickerWrap"></span></div>').after('<button type="button" class="icon"><i class="date_calender"></i></button>');
        } else {
            $(ele).datepicker(datepickerDefault).wrap('<div class="search-date"><span class="datepickerWrap"></span></div>').after('<button type="button" class="icon"><i class="date_calender"></i></button>');
        }
    }
    $.each($(ele), function (i, v) {
        let thisEl = $(this);
        let dp = thisEl.datepicker().data('datepicker');
        if (thisEl[0].defaultValue != '') {
            thisEl.val(thisEl[0].defaultValue);
        } else {
            thisEl.val();
        }
        $(this).next('button').on('click', function () {
            thisEl.focus();
        });
    });
}

//  air-datepicker :End //////////////////////////////////////////////////////////
