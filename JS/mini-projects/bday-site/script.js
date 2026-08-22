document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("goBtn").addEventListener("click", function () {
    document.getElementById("doU").src = "src/gifs/lfg.gif";
  });

  document.getElementById("noBtn").addEventListener("click", function () {
    document.getElementById("doU").src = "src/gifs/magic.gif";
    document.getElementById("noBtn").remove();
  });

  document
    .getElementById("funny-af")
    .addEventListener("mouseenter", function () {
      document.getElementById("listen").src = "src/gifs/funny.gif";
    });

  document
    .getElementById("smart-af")
    .addEventListener("mouseenter", function () {
      document.getElementById("listen").src = "src/gifs/genious.gif";
    });

  document
    .getElementById("beautiful-inside-out")
    .addEventListener("mouseenter", function () {
      document.getElementById("listen").src = "src/gifs/stunning.gif";
    });

  document
    .getElementById("warm-and-cozy")
    .addEventListener("mouseenter", function () {
      document.getElementById("listen").src = "src/gifs/warm-and-cozy.gif";
    });

  document
    .getElementById("supportive-queen")
    .addEventListener("mouseenter", function () {
      document.getElementById("listen").src = "src/gifs/supportive-queen.gif";
    });

  document
    .getElementById("my-person")
    .addEventListener("mouseenter", function () {
      document.getElementById("listen").src = "src/gifs/my-person.gif";

      document.querySelectorAll("li").forEach((li) => {
        li.style.setProperty("--bullet", '"🤍"');
      });
    });

  const wishesGif = document.getElementById("wishes");

  if (!wishesGif) {
    return;
  }

  const originalSrc = wishesGif.src;

  // === MASTER PLAN ===
  const masterPlan = document.getElementById("master-plan");
  if (masterPlan) {
    const masterPlanSrc = "./src/gifs/masterPlan.gif";

    masterPlan.addEventListener("click", function () {
      if (this.checked) {
        wishesGif.src = masterPlanSrc;
      } else {
        wishesGif.src = originalSrc;
      }
    });
  }

  // === TED LASSO PLEASE ===
  const tedLassoPlease = document.getElementById("ted-lasso-please");
  if (tedLassoPlease) {
    const tedLassoSrc = "./src/gifs/tedLassoPlease.gif";

    tedLassoPlease.addEventListener("click", function () {
      if (this.checked) {
        wishesGif.src = tedLassoSrc;
      } else {
        wishesGif.src = originalSrc;
      }
    });
  }

  // === HAPPY QUEEN ===
  const happyQueen = document.getElementById("happy-queen");
  if (happyQueen) {
    const happyQueenSrc = "./src/gifs/happyQueen.gif";

    happyQueen.addEventListener("click", function () {
      if (this.checked) {
        wishesGif.src = happyQueenSrc;
      } else {
        wishesGif.src = originalSrc;
      }
    });
  }

  // === BEST FRIEND EVER (наведение на div) ===
  const labels = document.querySelectorAll("#humble-list label");
  let friendLabel = null;
  labels.forEach((label) => {
    if (label.textContent.includes("Having the best friend")) {
      friendLabel = label;
    }
  });

  if (friendLabel) {
    const gif = document.getElementById("wishes");
    const originalSrc = gif.src;

    friendLabel.addEventListener("mouseenter", function () {
      gif.src = "./src/gifs/wanna-do-smth-huh.gif";
    });

    friendLabel.addEventListener("mouseleave", function () {
      gif.src = originalSrc;
    });
  }

  const letterGif = document.getElementById("letter-gif");
  const originalLetterSrc = letterGif.src;
  const newLetterSrc = "./src/gifs/maybe.gif";
  document
    .querySelector("#letter-figure figcaption")
    .addEventListener("mouseenter", function () {
      letterGif.src = newLetterSrc;
    });

  document
    .querySelector("#letter-figure figcaption")
    .addEventListener("mouseleave", function () {
      letterGif.src = originalLetterSrc;
    });

  document
    .getElementById("download-letter")
    .addEventListener("mouseenter", function () {
      letterGif.src = newLetterSrc;
    });

  document
    .getElementById("download-letter")
    .addEventListener("mouseleave", function () {
      letterGif.src = originalLetterSrc;
    });

  document
    .getElementById("countdown-btn")
    .addEventListener("click", function () {
      const text = document.getElementById("countdown-text");
      const timer = document.getElementById("countdown-timer");
      const gif = document.getElementById("countdown-gif");
      const photo = document.getElementById("memory-photo");

      text.textContent = "Oh wait wait... here we go!";

      let count = 3;
      timer.textContent = `${count}..`;

      const interval = setInterval(() => {
        count--;
        if (count > 0) {
          timer.textContent = `${count}..`;
        } else {
          clearInterval(interval);
          timer.textContent = "Here you are..";
          gif.style.display = "none";
          photo.style.display = "block";
          photo.src = "./src/photo.png";
        }
      }, 1000);
    });

  // === ДИСКО-ОГОНЬКИ ПО ВСЕМУ САЙТУ С МУЗЫКОЙ ===
  let discoActive = false;
  let audio = null;
  let isMusicPlaying = false;

  // === ДЛЯ ПАРТИ СЕКЦИИ - ТАНЦУЮЩИЙ ТЕКСТ ПО КЛИКУ ===
  document.getElementById("more-btn").addEventListener("click", function () {
    const body = document.body;
    const btn = this;
    const gif = document.getElementById("party-gif");
    const partySection = document.getElementById("party-time");

    discoActive = !discoActive;

    if (discoActive) {
      // Включаем диско режим
      body.classList.add("disco-mode");
      partySection.classList.add("active");
      btn.textContent = "⏹ STOP!";
      gif.src = "./src/gifs/more-dance.gif";

      // Включаем музыку
      if (!audio) {
        audio = new Audio("./src/music/disco.mp3");
        audio.loop = true;
        audio.volume = 0.5;
      }
      audio.play().catch(e => console.log("Автоплей заблокирован:", e));
      isMusicPlaying = true;

     
    } else {
      // Выключаем диско режим
      body.classList.remove("disco-mode");
      partySection.classList.remove("active");
      btn.textContent = "MOREEEE";
      gif.src = "./src/gifs/dance.gif";
      
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        isMusicPlaying = false;
      }
      
      const toggleBtn = document.getElementById("disco-toggle");
      if (toggleBtn) toggleBtn.remove();
    }
  });
});