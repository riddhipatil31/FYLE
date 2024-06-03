document.addEventListener('DOMContentLoaded', function () {
    var contactButton = document.getElementById('contact-button');
    var contactPopup = document.getElementById('contact-popup');
    var closePopup = document.querySelector('.close');

    contactButton.addEventListener('click', function () {
        contactPopup.style.display = 'flex';
    });

    closePopup.addEventListener('click', function () {
        contactPopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === contactPopup) {
            contactPopup.style.display = 'none';
        }
    });
    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        // Slider
        var slides = document.querySelector('.slides');
        var dots = document.querySelectorAll('.dot');
        var index = 0;
    // Function to change slide based on dot clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var contactButton = document.getElementById('contact-button');
    var contactPopup = document.getElementById('contact-popup');
    var closePopup = document.querySelector('.close');

    contactButton.addEventListener('click', function () {
        contactPopup.style.display = 'flex';
    });

    closePopup.addEventListener('click', function () {
        contactPopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === contactPopup) {
            contactPopup.style.display = 'none';
        }
    });
});

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
// Function to show slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
document.addEventListener("DOMContentLoaded", function() {
    // Slider
    var slides = document.querySelector('.slides');
    var dots = document.querySelectorAll('.dot');
    var index = 0;

    function showSlide(i) {
        index = i;
        if (index >= dots.length) index = 0;
        if (index < 0) index = dots.length - 1;
        slides.style.transform = 'translateX(' + (-index * 100) + '%)';
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });

    function currentSlide(n) {
        showSlide(n);
    }

    // Auto slide
    setInterval(() => {
        showSlide(index + 1);
    }, 3000);
});


// Initialize slideIndex and show first slide
var slideIndex = 1;
showSlides(slideIndex);

        function showSlide(i) {
            index = i;
            if (index >= dots.length) index = 0;
            if (index < 0) index = dots.length - 1;
            slides.style.transform = 'translateX(' + (-index * 100) + '%)';
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }
    
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => showSlide(i));
        });
    
        function currentSlide(n) {
            showSlide(n);
        }
    
        // Auto slide
        setInterval(() => {
            showSlide(index + 1);
        }, 3000);
        
    });
    
});