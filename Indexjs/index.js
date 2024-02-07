document.addEventListener("DOMContentLoaded", function () {
    const rotateBtn = document.getElementById("rotateBtn");
    const faqContent = document.getElementById("faqContent");

    rotateBtn.addEventListener("click", function () {
        faqContent.style.display = faqContent.style.display === "none" ? "block" : "none";
        rotateBtn.classList.toggle("closed");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the button and popup elements
    var openPopupButton = document.getElementById('openPopup');
    var closePopupButton = document.getElementById('closeBtn');
    var popup = document.getElementById('myPopup');

    // Check if the elements are found
    if (openPopupButton && closePopupButton && popup) {
        // Set the initial display style of the popup to 'none'
        popup.style.display = 'none';

        // Add a click event listener to the button to open the popup
        openPopupButton.addEventListener('click', function (event) {
            // Prevent the default behavior of the button (e.g., following a link)
            event.preventDefault();
            
            // Toggle the visibility of the popup using the "flex" style
            popup.style.display = popup.style.display === 'none' ? 'flex' : 'none';
        });

        // Add a click event listener to close the popup when close button is clicked
        closePopupButton.addEventListener('click', function () {
            popup.style.display = 'none';
        });

        // Add a click event listener to close the popup if clicked outside
        document.addEventListener('click', function (event) {
            if (!popup.contains(event.target) && event.target !== openPopupButton) {
                popup.style.display = 'none';
            }
        });
    } else {
        console.error('Button or popup element not found. Check your HTML IDs.');
    }
});

var textContent = document.getElementById('textContent');
        var scrollbarContainer = document.getElementById('scrollbarContainer');
        var scrollBars = document.querySelectorAll('.custom-scrollbar');
        var toggleIcon = document.getElementById('toggleIcon');
        var isPaused = true;
        var currentSlide = 0;
        var interval;

        // Display the first slide initially
        showSlide(currentSlide);

        function showSlide(slideIndex) {
            var slides = document.getElementsByClassName('text-slide');
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slides[slideIndex].style.display = 'block';

            // Update scrollbar colors
            scrollBars.forEach(function (bar, index) {
                bar.style.backgroundColor = index === slideIndex ? '#333' : '#ccc';
            });
        }

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            showSlide(currentSlide);
        }

        function togglePlayPause() {
            isPaused = !isPaused;
            if (isPaused) {
                clearInterval(interval);
                toggleIcon.textContent = '▶️';
            } else {
                interval = setInterval(function () {
                    if (currentSlide < scrollBars.length - 1) {
                        currentSlide++;
                    } else {
                        currentSlide = 0;
                    }
                    showSlide(currentSlide);
                }, 2000); // Change the interval as needed (currently set to 2 seconds)
                toggleIcon.textContent = '⏸️';
            }
        }

             // Function to check if an element is in the viewport
             function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
    
            // Function to handle scroll event
            function handleScrollAnimation() {
                var elements = document.querySelectorAll('.animated');
                elements.forEach(function(el) {
                    if (isElementInViewport(el)) {
                        el.classList.add('fade-in');
                    }
                });
            }
    
            // Initial call to handle scroll animation on page load
            handleScrollAnimation();
    
            // Event listener for scroll event
            window.addEventListener('scroll', handleScrollAnimation);