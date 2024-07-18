var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");

// Function to start the slideshow
function startSlideshow() {
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // Increment slideIndex and display the corresponding slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    // Change slide every 2 seconds (2000 milliseconds)
    setTimeout(startSlideshow, 2000); 
}

// Function to navigate to previous or next slide
function plusDivs(n) {
    showSlides(slideIndex += n);
}

// Function to display a specific slide
function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slides.length; }
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";  
}

// Initialize the slideshow
showSlides(slideIndex);

// Start the automatic slideshow
startSlideshow();

var currentIndex = 0;
var images = document.querySelectorAll('.marquee-container img');

function plusDivs(n) {
    currentIndex += n;
    showSlides();
}

function showSlides() {
    var maxIndex = images.length - 1;

    if (currentIndex > maxIndex) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    var offset = -currentIndex * (images[0].offsetWidth + 20); // Adjust 20 to match margin in CSS
    document.querySelector('.marquee-container').style.transform = 'translateX(' + offset + 'px)';
}

