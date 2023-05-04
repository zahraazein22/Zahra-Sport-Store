let text = "At Zahra Store, we believe you deserve the best Sports wear very comfortable for everyday use ..Zahra store that seeks out more than you need ..To help you achieve your needs, goals, and preferences.. ";
let index = 0;
function typeWriter() {
    if (index < text.length) {
      document.getElementById("intro").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  window.onload = typeWriter;