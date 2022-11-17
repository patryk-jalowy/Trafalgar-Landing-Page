const carusel = document.createElement('template')

carusel.innerHTML =
`
<style>
    @import "web-components/slider/slider.css";
</style>

<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="assets/articles/image 2 (1).png" style="width:100%">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="assets/articles/image 2.png" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="assets/articles/image 3.png" style="width:100%">
    <div class="text">Caption Three</div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
`
class Carusel extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(carusel.content.cloneNode(true))
  }

  connectedCallback () {
  }
}

window.customElements.define('site-carusel', Carusel)

let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides (n) {
  showSlides(slideIndex += n)
}

// Thumbnail image controls
function currentSlide (n) {
  showSlides(slideIndex = n)
}

function showSlides (n) {
  let i
  const slides = document.querySelectorAll('mySlides')
  const dots = document.querySelectorAll('dot')
  if (n >= slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
  console.log(slides)
}
