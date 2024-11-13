
  function closeModal() {
    document.getElementById('callRequestModal').style.display = 'none';
  }

  document.getElementById('callRequestForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value
    };

  };let currentSlideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const slidesContainer = document.querySelector('.slides');
  const totalSlides = slides.length;
  const slideInterval = 3000; // Change slide every 3 seconds
  
  function showSlides() {
      const offset = currentSlideIndex * -100; // 100% of the width to accommodate responsive layout
      slidesContainer.style.transform = `translateX(${offset}%)`; // Use percentage to ensure responsiveness
      slidesContainer.style.transition = 'transform 0.5s ease'; // Add transition for turning effect
  }
  
  // Function to change slide
  function moveSlide(direction) {
      currentSlideIndex += direction;
  
      // Loop back to the first slide if at the end
      if (currentSlideIndex >= totalSlides) {
          currentSlideIndex = 0;
      }
      // Loop back to the last slide if at the beginning
      if (currentSlideIndex < 0) {
          currentSlideIndex = totalSlides - 1;
      }
  
      showSlides();
  }
  
  // Automatically move to the next slide every few seconds
  setInterval(() => {
      moveSlide(1);
  }, slideInterval);
    setInterval(() => {
      moveSlide(1); // Move to the next slide
  }, slideInterval);
  
  // Initialize the slider
  showSlides();
  
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  document.addEventListener("DOMContentLoaded", function() {
      const container = document.querySelector('.container');

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  container.classList.add('show'); // Add class when in viewport
                  observer.unobserve(entry.target); // Stop observing once it’s in view
              }
          });
      }, { threshold: 0.5 }); // Trigger when 50% of the container is visible

      observer.observe(container);
  });

  // for container 5 revi8ews
  const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    document.querySelectorAll('.re').forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, index * 100); // Delay between each item animation
    });
  }
});
});
var modal = document.getElementById("callRequestModal");

        function openModal() {
            modal.style.display = "block";
        }
  

        document.getElementById('callRequestForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form data
            var formData = new FormData(this);

            // Here you would typically send the data to your server
            // For example, using fetch:
            /*
            fetch('/submit-call-request', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Handle success (e.g., show a success message to the user)
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error (e.g., show an error message to the user)
            });
            */

            // For demonstration, we'll just log the data to console
            for (var pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }

            // Clear the form
            this.reset();

            // Close the modal
            closeModal();

            alert('Form submitted!.wait for the call');
        });
        // review
        document.addEventListener("DOMContentLoaded", function() {
            const reviewImages = document.querySelectorAll('.re,.container-1 div');
          
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('show'); // Add the 'show' class when the image is in view
                  observer.unobserve(entry.target); // Stop observing after the image is shown
                }
              });
            }, {
              threshold: 0.5 // Trigger when 50% of the image is in view
            });
          
            reviewImages.forEach(image => {
              observer.observe(image);
            });
          });