// ABOUT
$(window).ready(function() {
  var typingBool = false;
  var typingIdx = 0;
  var typingTxt = $("#about_top h1.typing-txt").text(); // 타이핑될 텍스트를 가져온다
  typingTxt = typingTxt.split(""); // 한글자씩 자른다.
  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;

    var tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $("#about_top .typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
      typingIdx++;
    } else {
      clearInterval(tyInt); //끝나면 반복종료
    }
  }
});
// ABOUT



// SKILL
$(window).ready(function() {
  var typingBool = false;
  var typingIdx = 0;
  var typingTxt = $("#skill_box h1.typing-txt").text(); // 타이핑될 텍스트를 가져온다
  typingTxt = typingTxt.split(""); // 한글자씩 자른다.
  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;

    var tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $("#skill_box .typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
      typingIdx++;
    } else {
      clearInterval(tyInt); //끝나면 반복종료
    }
  }
});
// SKILL



// WORK
$(window).ready(function() {
  var typingBool = false;
  var typingIdx = 0;
  var typingTxt = $("#work_top_box h1.typing-txt").text(); // 타이핑될 텍스트를 가져온다
  typingTxt = typingTxt.split(""); // 한글자씩 자른다.
  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;

    var tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $("#work_top_box .typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
      typingIdx++;
    } else {
      clearInterval(tyInt); //끝나면 반복종료
    }
  }
});
// WORK




$(window).ready(function() {
  var typingBool = false;
  var typingIdx = 0;
  var typingTxt = $("#end_top_box h1.typing-txt").text(); // 타이핑될 텍스트를 가져온다
  typingTxt = typingTxt.split(""); // 한글자씩 자른다.
  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;

    var tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $("#end_top_box .typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
      typingIdx++;
    } else {
      clearInterval(tyInt); //끝나면 반복종료
    }
  }
});
// CONTACT