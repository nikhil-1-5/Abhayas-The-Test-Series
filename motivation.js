const speeches = [
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Every great achievement was once considered impossible. Keep going, you're closer than you think!",
  "You don’t have to be great to start, but you have to start to be great.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones. Step out and shine!",
  "Dream big. Work hard. Stay focused. And surround yourself with good people.",
  "You were born to be real, not perfect. Keep moving forward!"
];

let index = 0;
const textElement = document.getElementById("motivation-text");

function showSpeech(i) {
  textElement.textContent = speeches[i];
}

function nextSpeech() {
  index = (index + 1) % speeches.length;
  showSpeech(index);
}

function prevSpeech() {
  index = (index - 1 + speeches.length) % speeches.length;
  showSpeech(index);
}

function goHome() {
  window.location.href = "home.html"; // Update to your homepage
}

// Initial load
showSpeech(index);
