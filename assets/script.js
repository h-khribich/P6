// Data
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Declarations
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const arrows = document.querySelectorAll(".arrow");
const dots = document.querySelector(".dots")
const bannerImg = document.querySelector(".banner-img")
const bannerTagLine = document.querySelector(".banner-tagLine")
let slideIndex = 0;

// Banner initialization
bannerImg.src = `./assets/images/slideshow/${slides[0].image}`
bannerTagLine.innerHTML = slides[0].tagLine

slides.forEach((slide) => {
  const newDot = document.createElement("span")
  newDot.classList.add("dot")

  if(slides.indexOf(slide) === 0) {
    newDot.classList.add("dot_selected")
  }

  dots.appendChild(newDot);
})

// Banner scrolling feature
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.preventDefault();

    // Scrolling & infinite scrolling
    if (e.target.parentElement.classList.contains("arrow_left")) {
      slideIndex === 0 ? slideIndex = slides.length - 1 : slideIndex --;
    } else {
      slideIndex === slides.length - 1 ? slideIndex = 0 : slideIndex++;
    }

    // Replacing content
    bannerImg.src = "";
    bannerImg.src = `./assets/images/slideshow/${slides[slideIndex].image}`

    bannerTagLine.innerHTML = "";
    bannerTagLine.innerHTML = slides[slideIndex].tagLine

    // Updating dot hightlight according to index
    const previousHighlightedDot = dots.querySelector(".dot_selected")
    previousHighlightedDot.classList.remove("dot_selected")

    const currentHighlightedDot = dots.childNodes.item(slideIndex + 1)
    currentHighlightedDot.classList.add("dot_selected")
  })
})