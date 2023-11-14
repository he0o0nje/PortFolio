//타이핑 효과
$(function () {
  const text = document.querySelector(".title h2");
  const text2 = document.querySelector(".title p");
  const content =
    "FE DEVELOPER\nJAVASCRIPT / TYPESCRIPT / REACT / REACT-NATIVE / AJAX / JSON / JQUERY / OPEN API / RESPONSIVE WEB / NODE.JS / DJANGO / PYTHON / MYSQL / MONGODB / TIBERO / FIGMA";
  let i = 0;

  function typing() {
    let txt = content[i++];
    if (txt === "\n") {
      text2.innerHTML += "<br/>";
    } else {
      if (i <= content.indexOf("\n")) {
        text.innerHTML += txt;
      } else {
        text2.innerHTML += txt;
      }
    }
    if (i === content.length) {
      // i가 9일 때 clearInterval을 호출하여 멈춥니다.
      clearInterval(intervalId);
    }
  }

  const intervalId = setInterval(typing, 40);
});
