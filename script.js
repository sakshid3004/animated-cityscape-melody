// Create background animation
for (let i = 0; i < 2000; i++) {
  const shape = document.createElement("span");
  document.querySelector(".container").appendChild(shape);
}

// Handle music toggle
function toggleMusic() {
  const audio = document.getElementById("bgMusic");
  const button = document.getElementById("musicToggle");

  if (audio.paused) {
    audio.play();
    button.textContent = "🔈"; // Speaker ON

  } else {
    audio.pause();
    button.textContent = "🔇"; // Speaker OFF
  }
}


// Auto play music and update icon on load
window.addEventListener("load", () => {
  const audio = document.getElementById("bgMusic");
  const button = document.getElementById("musicToggle");

  audio.play().then(() => {
    button.textContent = "🔈";
  }).catch(() => {
    // Autoplay blocked – wait for user to click
    button.textContent = "🔇";
  });
});
