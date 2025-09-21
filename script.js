const phrases = [
  "Good morninggggg.",
  "Contigo todo es mejor.",
  "Tu actitud lo es todo.",
  "Gracias por ser mi manquita.",
  "Hoy es tu día 🌟",
  "Eres un sol q más brilla ☀️",
  "La vida es más linda contigo 💖",
  "Siempre florece donde vayas 🌸"
];

function showPhrase(x, y) {
  const phrase = document.createElement("div");
  phrase.className = "floating-phrase";

  // Elegir frase al azar
  phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];

  // Colores llamativos
  const colors = ["#ff4081", "#ffeb3b", "#00e5ff", "#76ff03", "#ff9100", "#e040fb"];
  phrase.style.color = colors[Math.floor(Math.random() * colors.length)];

  // Posición inicial
  phrase.style.position = "absolute";
  phrase.style.left = x + "px";
  phrase.style.top = y + "px";
  phrase.style.fontSize = "1.4rem";
  phrase.style.fontWeight = "bold";
  phrase.style.pointerEvents = "none";
  phrase.style.animation = "floatUp 3s ease-out forwards"; // ⬅️ Duración aumentada

  document.body.appendChild(phrase);

  setTimeout(() => {
    phrase.remove();
  }, 3000); // ⬅️ Coincide con la animación
}

// Evento: arrancar pétalo
document.querySelectorAll(".petal").forEach(petal => {
  petal.addEventListener("click", (e) => {
    showPhrase(e.pageX, e.pageY);
    petal.remove();
  });
});
