//close offer

let close_btn=document.getElementById("close")

close_btn.addEventListener("click",function(){
    close_btn.parentElement.remove()
})

//toggle sidebar

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}


//background images
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slider-container img');
    const totalSlides = slides.length;
    const imagesPerView = 3; // Number of images to display at a time
    let currentIndex = 0;

    // Function to move to the next set of images
    const nextSlide = () => {
        currentIndex = (currentIndex + imagesPerView) % totalSlides;
        updateSlider();
    };

    // Function to move to the previous set of images
    const prevSlide = () => {
        currentIndex = (currentIndex - imagesPerView + totalSlides) % totalSlides;
        updateSlider();
    };

    // Function to update the slider position
    const updateSlider = () => {
        const offset = -currentIndex * (100 / imagesPerView); // Adjust offset based on imagesPerView
        sliderContainer.style.transform = `translateX(${offset}%)`;
    };

    // Add event listeners to the arrow buttons
    document.querySelector('.arrow.left').addEventListener('click', prevSlide);
    document.querySelector('.arrow.right').addEventListener('click', nextSlide);

    setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
});


//scroll effect for most wanted

document.querySelector(".most_wanted").addEventListener("wheel", function(event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY; // Scrolls horizontally based on mouse wheel
});

//filters

