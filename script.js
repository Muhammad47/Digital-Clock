// Digital Clock
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("Clock").innerText = time;
  document.getElementById("Clock").innerText = time;
  setTimeout(showTime, 1000);
}
showTime();
// night or sun
function Night() {
    document.getElementById("mrmge").style.backgroundColor = "black";
    document.getElementById("Clock").style.backgroundColor = "white";
    document.getElementById("Clock").style.color = "black";
    document.getElementById("night").style.display = "none";
    document.getElementById("sun").style.display = "inline";
  }
  function Sun() {
    document.getElementById("mrmge").style.backgroundColor = "white";
    document.getElementById("Clock").style.backgroundColor = "black";
    document.getElementById("Clock").style.color = "white";
    document.getElementById("night").style.display = "inline";
    document.getElementById("sun").style.display = "none";
  }
