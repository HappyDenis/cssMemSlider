alert(
  "Уважаемые участники курса! Пожалуйста, проверьте задание завтра. Спасибо!"
);

let slideIndex = 0;
showSlides(); // call showslide method

function showSlides() {
  let i;

  let slides = document.getElementsByClassName("moving");

  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // increase by 1, Global letiable
  slideIndex++;

  // check for boundary
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Change image every 2 seconds
  setTimeout(showSlides, 2000);
}
