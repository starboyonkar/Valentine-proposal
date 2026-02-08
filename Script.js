/* NO button escape */
      const noBtn = document.getElementById("noBtn");
      noBtn.addEventListener("mouseover", moveButton);
      noBtn.addEventListener("touchstart", moveButton);

      function moveButton() {
        const x = Math.random() * 500 - 300;
        const y = Math.random() * 500 - 300;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
      }

      /* YES navigation + music */
      const yesBtn = document.getElementById("yesBtn");
      const mainPage = document.getElementById("mainPage");
      const yesPage = document.getElementById("yesPage");
      const music1 = document.getElementById("bgMusic1");
      const yesMusic = document.getElementById("yesMusic");

      // Try to autoplay the background music when the page loads (may be blocked by browser)
      window.addEventListener("load", () => {
        music1.play().catch(() => {
          // autoplay blocked — waiting for user interaction
        });
      });

      yesBtn.addEventListener("click", () => {
        mainPage.classList.add("hidden");
        yesPage.classList.remove("hidden");
        // stop background track and start the yes-track (yes-track loops)
        try {
          music1.pause();
        } catch (e) {}
        yesMusic.currentTime = 0;
        yesMusic.play();
      });

      /* Autoplay background on first user interaction (mobile safe) */
      document.body.addEventListener(
        "click",
        () => {
          music1.play();
        },
        { once: true },
      );

      /* Heart Rain Generator */
      function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
      }

      setInterval(createHeart, 250);