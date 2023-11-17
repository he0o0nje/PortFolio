$(document).ready(function () {
  var box_1 = $(".mobile_01 > div");
  var box_2 = $(".mobile_02 > div");
  var box_1_height = box_1.height();
  var box_2_height = box_2.height();
  var margin_plus1 = 0;
  var margin_plus2 = 0;

  function mobile_slide() {
    // 속도 조절을 위해 고정값 줌
    margin_plus1 += 515;
    margin_plus2 += 460;

    if (margin_plus1 >= box_1.children("img").height() - box_1_height) {
      margin_plus1 = 0;
    }

    if (margin_plus2 >= box_2.children("img").height() - box_2_height) {
      margin_plus2 = 0;
    }

    box_1.children("img").stop().animate({ marginTop: -margin_plus1 }, 800);
    box_2.children("img").stop().animate({ marginTop: -margin_plus2 }, 1000);
  }

  setInterval(mobile_slide, 2000);
});
