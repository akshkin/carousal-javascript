// javascript
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const slides = document.getElementsByClassName("carousal-item")
let slidePosition = 0
const totalSlides = slides.length
const dots = document.getElementsByClassName("dot")

//automated carousal
setInterval(nextSlide, 5000)

function hideAllSlides(){
    for (let slide of slides){
        slide.classList.remove("carousal-item-visible")
        slide.classList.add("carousal-item-hidden")
    }
    
    for(let dot of dots){
        dot.classList.remove("dot-active")
        dot.classList.add("dot-inactive")
    }
}
function showSlides(){
     slides[slidePosition].classList.add("carousal-item-visible")
     dots[slidePosition].classList.add("dot-active")
}

function prevSlide(){
    hideAllSlides()
    slidePosition === 0 ? slidePosition = totalSlides - 1 : slidePosition --  
   
    showSlides()
}
prevBtn.addEventListener("click", prevSlide)

function nextSlide(){
    hideAllSlides()
    slidePosition === totalSlides - 1? slidePosition = 0 : slidePosition ++
    showSlides()
}
nextBtn.addEventListener("click", nextSlide)

function clickDots(event){
    hideAllSlides()
    for(let i = 0; i < totalSlides; i++) {
        if (dots[i] === event.target.closest(`#dot-${i+1}`)){
            slides[i].classList.add("carousal-item-visible")
            dots[i].classList.add("dot-active")
        }
        
    }
}
document.getElementById("dot-1").addEventListener("click", clickDots)
document.getElementById("dot-2").addEventListener("click", clickDots)
document.getElementById("dot-3").addEventListener("click", clickDots)

