const phrases = [
  "Data Analyst",
  "Business Analyst",
  "Software Developer"
];
let currentPhrase = 0;
let currentLetter = 0;
const textElement = document.getElementById("typed-text");
const typingSpeed = 100; // speed of typing each letter (ms)
const erasingSpeed = 50; // speed of erasing each letter (ms)
const delayBetweenPhrases = 2000; // delay between phrases (ms)

function type() {
  if (currentLetter < phrases[currentPhrase].length) {
    textElement.textContent += phrases[currentPhrase].charAt(currentLetter);
    currentLetter++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenPhrases);
  }
}

function erase() {
  if (currentLetter > 0) {
    textElement.textContent = phrases[currentPhrase].substring(0, currentLetter - 1);
    currentLetter--;
    setTimeout(erase, erasingSpeed);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length; // Move to the next phrase
    setTimeout(type, typingSpeed);
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, delayBetweenPhrases);
});

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  