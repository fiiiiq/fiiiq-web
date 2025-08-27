const sections = document.querySelectorAll("section");

// Durasi per section (ms)
const durations = [16000, 19000, 19000, 36000, 16000, 17000, 18000, 39000, 13000];

let step = 0;
const audio = document.getElementById("lagu");

function scrollNext() {
  if (step < sections.length) {
    sections[step].scrollIntoView({ behavior: "smooth" });

    // Lanjut scroll setelah durasi selesai
    setTimeout(() => {
      step++;
      scrollNext();
    }, durations[step] || 0);
  }
}

// Jalankan scroll otomatis setelah musik play
audio.addEventListener("play", () => {
  step = 0;          // mulai dari awal
  scrollNext();
});
