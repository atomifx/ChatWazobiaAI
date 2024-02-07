document.addEventListener('DOMContentLoaded', function () {
    // Get references to elements
    var openBtn = document.getElementById('openBtn');
    var closeBtn = document.getElementById('closeBtn');
    var popupForm = document.getElementById('popupForm');
  
    // Show the popup when the open button is clicked
    openBtn.addEventListener('click', function () {
      popupForm.style.display = 'block';
    });
  
    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', function () {
      popupForm.style.display = 'none';
    });
  
    // Close the popup if the user clicks outside of it
    window.addEventListener('click', function (event) {
      if (event.target === popupForm) {
        popupForm.style.display = 'none';
      }
    });
  });
