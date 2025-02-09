document.addEventListener("DOMContentLoaded", function () {
  const buttonNe = document.getElementById("button-ne");
  const buttonDa = document.getElementById("button-da");
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
      loadingScreen.classList.add("fade-out");
      loadingScreen.addEventListener("animationend", function () {
          loadingScreen.style.display = "none";
      });
  }, 1200);

  if (buttonNe) {
      buttonNe.style.position = "fixed"; 

     buttonNe.addEventListener("mouseover", function () {
    const buttonWidth = 200;
    const buttonHeight = 70;

    // Računanje maksimalne pozicije za X i Y
    const maxWidth = window.innerWidth - buttonWidth;
    const maxHeight = window.innerHeight - buttonHeight;

    // Generiši nasumične koordinate u opsegu od 0 do maksimalne širine i visine
    const randomX = Math.floor(Math.random() * (maxWidth + 1)); // +1 da uključimo poslednju moguću poziciju
    const randomY = Math.floor(Math.random() * (maxHeight + 1)); // +1 da uključimo poslednju moguću poziciju

    // Postavljanje pozicije dugmeta
    buttonNe.style.left = randomX + "px";
    buttonNe.style.top = randomY + "px";

    });
  }

  if (buttonDa) {
      buttonDa.addEventListener("click", function () {
          alert("Jeeee! ❤️ Jedva čekam! 🥰");
      });
  }

  var countDownDate = new Date("Feb 14, 2025 00:00:00").getTime();
  var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("demo").innerHTML =
          days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
      }
  }, 1000);
});
