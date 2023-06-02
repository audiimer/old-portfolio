

/*------------------------about section tabs-------------------*/

(() => {
  const aboutSection = document.querySelector(".about-section");
  const tabsContainer = document.querySelector(".about-tabs");
  const projectsLink = document.querySelector(".tab-item[data-target='.skills']");
  const experienceLink = document.querySelector(".tab-item[data-target='.experience']");
  const educationLink = document.querySelector(".tab-item[data-target='.education']");
  const projectsAnchor = document.querySelector("a[href='#projects']");
  const experienceAnchor = document.querySelector("a[href='#experience']");
  const educationAnchor = document.querySelector("a[href='#education']");

  tabsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
      const target = event.target.getAttribute("data-target");
      // deactivate existing active 'tab-item'
      tabsContainer.querySelector(".active").classList.remove("active");
      // activate new 'tab-item'
      event.target.classList.add("active");
      // deactivate existing active 'tab-content'
      aboutSection.querySelector(".tab-content.active").classList.remove("active");
      // activate new 'tab-content'
      aboutSection.querySelector(target).classList.add("active");
    }
  });

  // Activate default tabs
  projectsLink.click();

  // Add click event listener to the projects anchor
  projectsAnchor.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    projectsLink.click(); // Simulate click on the projects link
  });

  // Add click event listener to the experience anchor
  experienceAnchor.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    experienceLink.click(); // Simulate click on the experience link
  });

  // Add click event listener to the education anchor
  educationAnchor.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    educationLink.click(); // Simulate click on the education link
  });
})();
// JavaScript code to handle slider functionality
document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".slider-arrows .prev");
    const nextBtn = document.querySelector(".slider-arrows .next");
    const sliderContainer = document.querySelector(".slider-container");
    const sliderItems = document.querySelectorAll(".slider-item");
    let currentIndex = 0;

    // Function to update the active slider item
    function updateSlider() {
      sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listeners for arrow buttons
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
      updateSlider();
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      updateSlider();
    });
  });



  // geting canvas by Boujjou Achraf
  let c = document.getElementById("c");
  let ctx = c.getContext("2d");

  //making the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  //chinese characters - taken from the unicode charset
  let matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  //converting the string into an array of single characters
  matrix = matrix.split("");

  let font_size = 10;
  let columns = c.width/font_size; //number of columns for the rain
  //an array of drops - one per column
  let drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for(let x = 0; x < columns; x++)
      drops[x] = 1;

  // drawing the characters
function draw() {
    // Black BG for the canvas
    // Translucent BG to show trail
    ctx.fillStyle = "rgba(2, 53, 60 , 0.1)";
    ctx.fillRect(0, 0, c.width, c.height);

    // Set the text color with reduced opacity
    ctx.fillStyle = "rgba(77,255,150, 0.5)"; // Green text with reduced opacity
    ctx.font = font_size + "px arial";
    // Looping over drops
    for (let i = 0; i < drops.length; i++) {
      // A random character to print
      let text = matrix[Math.floor(Math.random() * matrix.length)];
      // x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      // Sending the drop back to the top randomly after it has crossed the screen
      // Adding a randomness to the reset to make the drops scattered on the Y axis
      if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

      // Incrementing Y coordinate
      drops[i]++;
    }
  }

  setInterval(draw, 35);

  // Carousel
  document.addEventListener("DOMContentLoaded", function() {
    // Get the carousel element
    const carousel = document.querySelector(".carousel");

    // Get the carousel items
    const carouselItems = carousel.querySelectorAll(".carousel-item");

    // Get the previous and next buttons
    const prevButton = carousel.querySelector(".carousel-control-prev");
    const nextButton = carousel.querySelector(".carousel-control-next");

    // Initialize the current index
    let currentIndex = 0;

    // Add event listener for the previous button
    prevButton.addEventListener("click", function() {
      // Decrement the current index
      currentIndex--;

      // Wrap around to the last item if the index goes below 0
      if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
      }

      // Update the active item
      updateActiveItem();
    });

    // Add event listener for the next button
    nextButton.addEventListener("click", function() {
      // Increment the current index
      currentIndex++;

      // Wrap around to the first item if the index exceeds the number of items
      if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
      }

      // Update the active item
      updateActiveItem();
    });

    // Function to update the active item and indicators
    function updateActiveItem() {
      // Remove the "active" class from all items
      carouselItems.forEach(function(item) {
        item.classList.remove("active");
      });

      // Add the "active" class to the current item
      carouselItems[currentIndex].classList.add("active");
    }
  });
  //NAVBAS
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
  });


 // Get the modal
 const modal = document.getElementById("myModal");

 // Get the button that opens the modal
 const btn = document.getElementById("contact");

 // Get the <span> element that closes the modal
 const span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal
 btn.onclick = function() {
   modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }


 // Scroll to target section when a link is clicked
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
