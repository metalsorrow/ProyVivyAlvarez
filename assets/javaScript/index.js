

function menu() {
  const ancla = document.getElementsByClassName("nav_enlace");
  for (let i = 0; i < ancla.length; i++) {
    ancla[i].classList.toggle("desaparece");
  }
}