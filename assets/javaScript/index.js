var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function menu(){
  const ancla = document.getElementsByClassName("nav_enlace");
  for(let i = 0; i < ancla.length; i++ ){
    ancla[i].classList.toggle("desaparece");
  }
}





// const boton =document.querySelector(".menu");
// boton.addEventListener("click",menu())
