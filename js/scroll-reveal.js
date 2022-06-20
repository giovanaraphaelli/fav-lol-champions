export function initScrollReveal() {
  const sr = ScrollReveal({
    delay: 500,
    distance: "100px",
    duration: 3000,
    reset: true,
  });
  sr.reveal(".toLeft", { origin: "left" });
  sr.reveal(".toRight", { origin: "right" });
}
