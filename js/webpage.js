/*마우스 올라가면 웹 페이지 이동하는 것 */

$(function () {
  /*첫번째 웹페이지 */
  $(".webpage01")
    .mouseenter(function () {
      $(".webpage01 img").stop().animate({ marginTop: -3200 }, 4000);
    })
    .mouseleave(function () {
      $(".webpage01 img").stop().animate({ marginTop: 0 }, 2000);
    });

  /*두번째 웹페이지 */
  $(".webpage02")
    .mouseenter(function () {
      $(".webpage02 img").stop().animate({ marginTop: -2400 }, 3000);
    })
    .mouseleave(function () {
      $(".webpage02 img").stop().animate({ marginTop: 0 }, 2000);
    });

  /*세번째 웹페이지 */
  $(".webpage03")
    .mouseenter(function () {
      $(".webpage03 img").stop().animate({ marginTop: -2700 }, 3000);
    })
    .mouseleave(function () {
      $(".webpage03 img").stop().animate({ marginTop: 0 }, 2000);
    });

  /*네번째 웹페이지 */
  $(".webpage04")
    .mouseenter(function () {
      $(".webpage04 img").stop().animate({ marginTop: -2000 }, 3000);
    })
    .mouseleave(function () {
      $(".webpage04 img").stop().animate({ marginTop: 0 }, 2000);
    });

  /*네번째 웹페이지 */
  $(".webpage05")
    .mouseenter(function () {
      $(".webpage05 img").stop().animate({ marginTop: -2000 }, 3000);
    })
    .mouseleave(function () {
      $(".webpage05 img").stop().animate({ marginTop: 0 }, 2000);
    });
});
