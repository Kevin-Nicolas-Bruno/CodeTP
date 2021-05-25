"use strict";
const abrirModal = document.querySelectorAll("[data-open]");
const visible = "visible";

for (const abrir of abrirModal) {
  abrir.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(visible);
  });
}
document.addEventListener("keyup", e => {
  if (e.key == "Escape" && document.querySelector(".modal.visible")) {
    document.querySelector(".modal.visible").classList.remove(visible);
  }
});