
function selecE(elemento) {
    
    if (typeof elemento !== 'string') {
        return;
    } else {
        return document.querySelectorAll(elemento);
    }
}
let slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = selecE(".mySlides");  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

showSlides(slideIndex);

document.querySelector('#prev_').addEventListener('click', () => {
    plusSlides(-1)
});
document.querySelector('#sig_').addEventListener('click', () => {
    plusSlides(1)
});
