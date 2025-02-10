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
        const buttonWidth = buttonNe.offsetWidth;
        const buttonHeight = buttonNe.offsetHeight;
    
        const maxWidth = window.innerWidth - buttonWidth - 20; // Ograničava da ne izađe van ekrana
        const maxHeight = window.innerHeight - buttonHeight - 20;
    
        const randomX = Math.max(10, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(10, Math.floor(Math.random() * maxHeight));
    
        buttonNe.style.left = randomX + "px";
        buttonNe.style.top = randomY + "px";
        buttonNe.style.position = "absolute"; // Osigurava da se dugme pomera
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
