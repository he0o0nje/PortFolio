//타이핑 효과
$(function () {
  const text = document.querySelector(".title h2");
  const text2 = document.querySelector(".title p");
  const content =
    "FRONT-END DEVELOPER\nJavascript / Typescript / React / Redux / React-Native / Expo / Ajax / jQuery / Open API / Responsive Web / Node.js / MySQL / Tibero / Figma";
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
      clearInterval(intervalId);
    }
  }

  const intervalId = setInterval(typing, 40);
});
