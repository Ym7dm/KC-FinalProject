let icon = document.getElementById("icon");
icon.onclick = function dark() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../Images/sun.png";
  } else {
    icon.src = "../Images/moon.png";
  }
};
