$(function () {
  $(".about_icon > li")
    .mouseover(function () {
      $(this).children(".burble").stop().fadeIn();
    })
    .mouseout(function () {
      $(".burble").stop().fadeOut("slow");
    });
});

/*마우스 올라가면 웹 페이지 이동하는 것 */

$(function () {
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
