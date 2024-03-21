
    // Mobile Responsive Menu

    document.addEventListener("DOMContentLoaded", function() {
        // Your JavaScript code here
        const menubar = document.querySelector(".hum-menu");
        const open_menu = document.querySelector(".fa-bars");
        const close_menu =  document.querySelector(".fa-xmark");
        const menulist =  document.querySelector("nav ul");
    
        close_menu.style.display = "none";
    
        open_menu.addEventListener("click", () => {
            menulist.classList.toggle("showmenu");
            open_menu.style.display = "none";
            close_menu.style.display = "block";
        });
    
        close_menu.addEventListener("click", () => {
            menulist.classList.remove("showmenu");
            open_menu.style.display = "block";
            close_menu.style.display = "none";
        });
    
        window.addEventListener('scroll', function() {
            var header = document.querySelector("header");
            var logo = document.querySelector(".logo h2");
    
            if (window.scrollY > 0) {
                header.classList.add('f-header');
                logo.style.color = "var(--primary-color)";
            } else {
                header.classList.remove('f-header');
                logo.style.color = "white";
            }
        });
    });
    



 /// Sticky Header Windows


 

    // Sticky Header Windows
window.addEventListener('scroll', function() {
    // Sticky Header
    var header = document.querySelector("header");
    
    // Only execute the sticky header functionality if the header is displayed (i.e., not on mobile and tablet screens)
    if (getComputedStyle(header).display !== 'none') {
        header.classList.toggle('f-header', window.scrollY > 0);
        
        // Your other sticky header JavaScript code
        // ...
        window.addEventListener('scroll', function() {
            // Only execute the sticky header functionality on desktop screens
            if (window.innerWidth >= 768) {
                // Sticky Header
                var header = document.querySelector("header");
                header.classList.toggle('f-header', window.scrollY > 0);
        
                // Change background color of header, logo color, and menu color
                if (window.scrollY > 0) {
                    header.style.backgroundColor = "rgb(255, 255, 255)"; // Change header background color to white
                    header.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)"; // Add box shadow to header
                    var logo = document.querySelector(".logo h2");
                    logo.style.color = "var(--primary-color)"; // Change logo color to green
                    var navLinks = document.querySelectorAll(".menus a");
                    navLinks.forEach(function(link) {
                        link.style.color = "#1e1e1e"; // Change menu color to black
                    });
                } else {
                    header.style.backgroundColor = ""; // Revert to default background color
                    header.style.boxShadow = "none"; // Remove box shadow from header
                    var logo = document.querySelector(".logo h2");
                    logo.style.color = "white"; // Revert to default logo color
                    var navLinks = document.querySelectorAll(".menus a");
                    navLinks.forEach(function(link) {
                        link.style.color = "white"; // Revert to default menu color
                    });
                }
        
                // Change background color and add box shadow to con2-col1 after scrolling
                var con2Col1 = document.querySelector(".cont2-col1");
                var threshold = 90; // Adjust the threshold as needed (e.g., the height of the header)
                if (window.scrollY > threshold) {
                    con2Col1.style.backgroundColor = "white";
                    con2Col1.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)"; // Add box shadow to con2-col1
                    con2Col1.style.position = "fixed"; // Position con2-col1 at the top
                    con2Col1.style.top = "0"; // Set the top position to 0
                } else {
                    con2Col1.style.backgroundColor = ""; // Revert to default background color
                    con2Col1.style.boxShadow = "none"; // Remove box shadow from con2-col1
                    con2Col1.style.position = "static"; // Revert to default position
                }
        
                // Hide Icon Container
                var iconsContainer = document.querySelector('.icons');
                var container1 = document.querySelector('.container1');
                var scrollPosition = window.scrollY;
        
                // Adjust the threshold as needed
                var threshold = container1.offsetTop + container1.offsetHeight; // Hide the icons container when scrolling past the bottom of container1
        
                // Hide the icons container if the scroll position exceeds the threshold
                if (scrollPosition > threshold) {
                    iconsContainer.style.display = 'none';
                } else {
                    iconsContainer.style.display = 'flex';
                }
            }
        });
    }
});



    
  
    
   
   

 


    // Background slider

document.addEventListener('DOMContentLoaded', function() {
    const backgroundImages = [
        'url("images/slide_01.jpg")',
        'url("images/slide_02.jpg")',
        'url("images/slide_03.jpg")'
    ];

    let currentImageIndex = 0;
    const totalImages = backgroundImages.length;

    const backgroundImageSlider = document.querySelector('.background-image-slider');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');

    arrowLeft.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        updateBackgroundImageAndContent();
    });

    arrowRight.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateBackgroundImageAndContent();
    });

    function updateBackgroundImageAndContent() {
        backgroundImageSlider.style.backgroundImage = backgroundImages[currentImageIndex];

        const contentContainers = document.querySelectorAll('.con3-cont-1');
        contentContainers.forEach((container, index) => {
            if (index === currentImageIndex) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }


    // Automatically change background image and content
    setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateBackgroundImageAndContent();
    }, 8000); // Change image every 5 seconds (5000 milliseconds)
});



// Function to animate the counting effect
function animateCounting(targetElement, startValue, endValue, duration) {
    let current = startValue;
    const increment = Math.floor((endValue - startValue) / (duration / 1000)); // Calculate increment based on duration

    const interval = setInterval(() => {
        current += increment; // Increment current value
        if (current >= endValue) {
            clearInterval(interval); // Stop the interval when end value is reached
            current = endValue; // Ensure the final value is exact
        }
        targetElement.textContent = current; // Update the text content of the target element
    }, 1000); // Update every second
}

// Get all counter elements
const counters = document.querySelectorAll('.counter-text h2');

// Loop through each counter and animate the counting effect
counters.forEach((counter) => {
    const endValue = parseInt(counter.textContent); // Get the end value from the counter text
    animateCounting(counter, 0, endValue, 2000); // Animate from 0 to the end value in 2 seconds (2000 milliseconds)
});



    // Testimonial slider
    
    /* document.addEventListener("DOMContentLoaded", function() {
        const testimonialSlides = document.querySelectorAll('.con7-cot1');
        const totalSlides = testimonialSlides.length;
        let currentSlide = 0; // Start with the first slide
    
        // Set the initial position for each slide
        testimonialSlides.forEach((slide, index) => {
            if (index > 1) {
                slide.style.display = 'none';
            }
        });
    
        // Go to the next slide
        function goToNextSlide() {
            testimonialSlides[currentSlide].style.display = 'none';
            testimonialSlides[currentSlide + 1].style.display = 'none';
            currentSlide += 2;
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            testimonialSlides[currentSlide].style.display = 'block';
            if (currentSlide + 1 < totalSlides) {
                testimonialSlides[currentSlide + 1].style.display = 'block';
            } else {
                testimonialSlides[0].style.display = 'block';
            }
        }
    
        // Auto play the slider
        setInterval(goToNextSlide, 5000); // Adjust autoplay speed here
    });
     */

    document.addEventListener("DOMContentLoaded", function() {
        const testimonialSlides = document.querySelectorAll('.con7-cot1');
        const totalSlides = testimonialSlides.length;
        let currentSlide = 0; // Start with the first slide
    
        // Function to hide all slides
        function hideAllSlides() {
            testimonialSlides.forEach(slide => {
                slide.style.display = 'none';
            });
        }
    
        // Function to show default number of slides based on screen size
        function showDefaultSlides() {
            const screenWidth = window.innerWidth;
            hideAllSlides();
            if (screenWidth >= 1024) {
                // Large screens (window) - Display default 2 slides
                testimonialSlides[currentSlide].style.display = 'block';
                testimonialSlides[currentSlide + 1].style.display = 'block';
            } else if (screenWidth >= 600 && screenWidth < 1024) {
                // Tablet screens - Display default 2 slides
                testimonialSlides[currentSlide].style.display = 'block';
                testimonialSlides[currentSlide + 1].style.display = 'block';
            } else {
                // Mobile screens - Display default 1 slide
                testimonialSlides[currentSlide].style.display = 'block';
            }
        }
    
        // Show default slides when the page loads
        showDefaultSlides();
    
        // Re-show default slides when the window is resized
        window.addEventListener('resize', showDefaultSlides);
    
        // Go to the next slide
        function goToNextSlide() {
            hideAllSlides();
            currentSlide += 2;
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            showDefaultSlides();
        }
    
        // Auto play the slider
        setInterval(goToNextSlide, 5000); // Adjust autoplay speed here
    });
    
    // Testimonial End



    // Logo Slider 
/* 
    document.addEventListener("DOMContentLoaded", function() {
        const slider = document.getElementById("slider");
        let isDragging = false;
        let startPosition = 0;
        let currentTranslate = 0;
        let previousTranslate = 0;
        let animationId;
        const threshold = 100; // Minimum distance to trigger slide change
    
        // Set initial position
        setPosition();
    
        // Mouse events
        slider.addEventListener("mousedown", handleMouseDown);
        slider.addEventListener("mousemove", handleMouseMove);
        slider.addEventListener("mouseup", handleMouseUp);
        slider.addEventListener("mouseleave", handleMouseUp);
    
        function handleMouseDown(event) {
            isDragging = true;
            startPosition = event.clientX;
            animationId = requestAnimationFrame(animation);
            slider.style.cursor = "grabbing";
        }
    
        function handleMouseMove(event) {
            if (isDragging) {
                const currentPosition = event.clientX;
                const difference = currentPosition - startPosition;
                currentTranslate = previousTranslate + difference;
            }
        }
    
        function handleMouseUp() {
            if (isDragging) {
                const difference = currentTranslate - previousTranslate;
                if (Math.abs(difference) > threshold) {
                    if (difference > 0) {
                        currentTranslate += slider.offsetWidth; // Move right
                    } else {
                        currentTranslate -= slider.offsetWidth; // Move left
                    }
                }
            }
    
            cancelAnimationFrame(animationId);
            isDragging = false;
            previousTranslate = currentTranslate;
            setPosition(); // Ensure proper loop effect
            slider.style.cursor = "grab";
        }
    
        function animation() {
            setSliderPosition();
            if (isDragging) {
                requestAnimationFrame(animation);
            }
        }
    
        function setSliderPosition() {
            slider.style.transform = `translateX(${currentTranslate}px)`;
        }
    
        function setPosition() {
            const slides = Array.from(slider.children);
            const lastSlide = slides[slides.length - 1];
            const firstSlide = slides[0];
    
            if (currentTranslate >= 0) {
                // Reached right end, move to the left end
                currentTranslate = -lastSlide.offsetLeft;
                previousTranslate = currentTranslate;
            } else if (currentTranslate <= -lastSlide.offsetLeft) {
                // Reached left end, move to the right end
                currentTranslate = 0;
                previousTranslate = currentTranslate;
            }
        }
    });
     */
    


   


    //counter script

    //  First counter script code

   /*  document.addEventListener("DOMContentLoaded", function() {
        // Function to check if an element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        const counters = document.querySelectorAll('.counter-text h2');
        const targetValues = [942, 1278, 577, 26]; // Target values for each counter
        
        // Function to start the counters when in view
        function startCounters() {
            counters.forEach((counter, index) => {
                let current = 0;
                const target = targetValues[index];
                const increment = target / 100; // Adjust the increment value as needed
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.innerText = Math.ceil(current);
                        setTimeout(updateCounter, 10); // Adjust the timeout for smoother animation
                    } else {
                        counter.innerText = target;
                    }
                };
        
                updateCounter();
            });
        }
        
        // Check if the counter section is in the viewport
        function checkViewport() {
            const counterSection = document.querySelector('.con5-counter');
            if (isInViewport(counterSection)) {
                startCounters();
                window.removeEventListener('scroll', checkViewport);
            }
        }
        
        // Listen for scroll events to check if the counter section is in view
        window.addEventListener('scroll', checkViewport);
    }); */
    
        // All screen size counter script

    document.addEventListener("DOMContentLoaded", function() {
        const counters = document.querySelectorAll('.counter-text h2');
        const targetValues = [945, 1280, 578, 26]; // Target values for each counter
    
        // Function to start the counters
        function startCounters() {
            counters.forEach((counter, index) => {
                let current = 0;
                const target = targetValues[index];
                const increment = target / 100; // Adjust the increment value as needed
    
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter); // Use requestAnimationFrame for smoother animation
                    } else {
                        counter.innerText = target;
                    }
                };
    
                updateCounter();
            });
        }
    
        // Function to handle counter initialization
        function initializeCounters() {
            // Create a new Intersection Observer
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    // If the counter section is intersecting with the viewport, start the counters
                    if (entry.isIntersecting) {
                        startCounters();
                        observer.disconnect(); // Disconnect the observer once counters are started
                    }
                });
            });
    
            // Observe the counter section
            const counterSection = document.querySelector('.con5-counter');
            observer.observe(counterSection);
        }
    
        // Initialize counters for mobile screens immediately if counter container is in view
        function initializeCountersForMobile() {
            const counterSection = document.querySelector('.con5-counter');
            const rect = counterSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                startCounters();
            } else {
                // If counter container is not in view, initialize counters using Intersection Observer
                initializeCounters();
            }
        }
    
        // Initialize counters based on screen size
        function initializeCountersBasedOnScreenSize() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) {
                // Large screens (window)
                initializeCounters();
            } else if (screenWidth >= 600 && screenWidth < 1024) {
                // Tablet screens
                initializeCounters();
            } else {
                // Mobile screens
                initializeCountersForMobile();
            }
        }
    
        // Initialize counters based on screen size when the page loads
        initializeCountersBasedOnScreenSize();
    
        // Re-initialize counters when the window is resized
        window.addEventListener('resize', initializeCountersBasedOnScreenSize);
    });
    


    


/* 
    // service script

     // Select service text elements
const s1_all = document.querySelectorAll('.s1-cot');
const s1 = document.querySelector('.s1-cot1');
const s2 = document.querySelector('.s1-cot2');
const s3 = document.querySelector('.s1-cot3');
const s4 = document.querySelector('.s1-cot4');

// Select service content elements
const s1_cot = document.querySelector(".s1-row2-cot1");
const s2_cot = document.querySelector(".s1-row2-cot2");
const s3_cot = document.querySelector(".s1-row2-cot3");
const s4_cot = document.querySelector(".s1-row2-cot4");

// Function to hide all service content elements
const hideAllServiceContent = () => {
    s1_cot.style.display = "none";
    s2_cot.style.display = "none";
    s3_cot.style.display = "none";
    s4_cot.style.display = "none";
};

// Add click event listener to each service text element
s1_all.forEach(service => {
    service.addEventListener("click", () => {
        // Hide all service content elements
        hideAllServiceContent();

        // Remove "active" class from all service text elements
        s1_all.forEach(item => {
            item.classList.remove("active");
        });

        // Add "active" class to the clicked service text element
        service.classList.add("active");

        // Determine which service text element was clicked and show its respective content
        if (service === s1) {
            s1_cot.style.display = "block";
        } else if (service === s2) {
            s2_cot.style.display = "block";
        } else if (service === s3) {
            s3_cot.style.display = "block";
        } else if (service === s4) {
            s4_cot.style.display = "block";
        }
    });
});
 */

// Scroll To Top 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}