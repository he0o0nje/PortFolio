// 홈 내 정보
$(function () {
  $(".about_icon > li")
    .mouseover(function () {
      $(this).children(".burble").stop().fadeIn();
    })
    .mouseout(function () {
      $(".burble").stop().fadeOut("slow");
    });
});

// 사이드 탭 클릭
$(function () {
  $("#menu > li").click(function () {
    $("#menu > li").removeClass("active");
    $("#menu > li > a").removeClass("active");
    $("#menu > li > a > span").removeClass("active");
    $(this).addClass("active");
    $(this).find("a").addClass("active");
    $(this).find("a > span").addClass("active");
  });
});

// 스크롤 반응 탭 활성화
$(window).scroll(function () {
  // 현재 스크롤의 높이값
  var scroll = $(window).scrollTop();

  // 내용의 높이값
  var item1 = $(".section").offset().top;
  var item1_end = item1 + $(".section").outerHeight();

  // 스크롤의 높이가 내용의 높이값의 끝보다 작으면 탭 활성화
  if (scroll < item1_end) {
    $("#menu > li").removeClass("active");
    $("#menu > li").addClass("active");
  }
});

var doc = document.documentElement;
// 전체화면 설정
function openFullScreenMode() {
  if (doc.requestFullscreen) doc.requestFullscreen();
  else if (doc.webkitRequestFullscreen)
    // Chrome, Safari (webkit)
    doc.webkitRequestFullscreen();
  else if (doc.mozRequestFullScreen)
    // Firefox
    doc.mozRequestFullScreen();
  else if (doc.msRequestFullscreen)
    // IE or Edge
    doc.msRequestFullscreen();
}
window.onresize = function (event) {
  var innerWidth = window.innerWidth;
  innerWidth <= "1280"
    ? (body.style.borderColor = "blue")
    : (body.style.borderColor = "black");
};

/*마우스 올라가면 웹 페이지 이동하는 것 */

https: $(function () {
  /*첫번째 웹페이지 */
  $(".webpage01")
    .mouseenter(function () {
      $(".webpage01 img").stop().animate({ marginTop: -3070 }, 4000);
    })
    .mouseleave(function () {
      $(".webpage01 img").stop().animate({ marginTop: 0 }, 2000);
    });

  /*두번째 웹페이지 */
  $(".webpage02")
    .mouseenter(function () {
      $(".webpage02 img").stop().animate({ marginTop: -1570 }, 3000);
    })
    .mouseleave(function () {
      $(".webpage02 img").stop().animate({ marginTop: 0 }, 2000);
    });

  /*세번째 웹페이지 */
  $(".webpage03")
    .mouseenter(function () {
      $(".webpage03 img").stop().animate({ marginTop: -980 }, 3000);
    })
    .mouseleave(function () {
      $(".webpage03 img").stop().animate({ marginTop: 0 }, 2000);
    });

  /*네번째 웹페이지 */
  $(".webpage04")
    .mouseenter(function () {
      $(".webpage04 img").stop().animate({ marginTop: -1830 }, 3000);
    })
    .mouseleave(function () {
      $(".webpage04 img").stop().animate({ marginTop: 0 }, 2000);
    });

  /*다섯번째 웹페이지 */
  $(".webpage05")
    .mouseenter(function () {
      $(".webpage05 img").stop().animate({ marginTop: -2000 }, 3000);
    })
    .mouseleave(function () {
      $(".webpage05 img").stop().animate({ marginTop: 0 }, 2000);
    });
});
