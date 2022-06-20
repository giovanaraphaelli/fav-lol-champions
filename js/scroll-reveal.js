export function initScrollReveal() {
  const sr = ScrollReveal({
    delay: 300,
    distance: "100px",
    duration: 1500,
    reset: false,
  });
  sr.reveal(".toLeft", { origin: "left" });
  sr.reveal(".toRight", { origin: "right" });
}
