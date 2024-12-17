function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "YOUTUBER"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".edu, .edu_container, .e_contents");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

AOS.init({
    duration: 1000, // Animation duration (ms)
    once: true, // Whether animation should happen only once
});



document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline li");

    function checkVisibility() {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top + scrollY;
            const itemHeight = item.offsetHeight;

            // Check if the item is in the viewport
            if (scrollY + windowHeight >= itemTop && scrollY <= itemTop + itemHeight) {
                item.classList.add("visible");
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
                item.classList.remove("visible");
            }
        });
    }

    // Initial check on page load
    checkVisibility();

    // Listen for scroll events
    window.addEventListener("scroll", checkVisibility);
});
// Scroll Animation for Education Section
window.addEventListener('scroll', () => {
    const eduItems = document.querySelectorAll('.edu-item');
    const windowHeight = window.innerHeight;

    eduItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        if (itemPosition < windowHeight - 100) {
            item.classList.add('visible');
        }
    });
});

  

  
document.addEventListener('DOMContentLoaded', () => {
    function updateAOSAnimation() {
      // Select all elements with the class 'project-container'
      const containers = document.querySelectorAll('.project-container');
  
      containers.forEach((container) => {
        // Check the screen width and update the data-aos attribute
        if (window.innerWidth < 1000) {
          container.setAttribute('data-aos', 'fade-up');
        } else {
          container.setAttribute('data-aos', 'fade-right');
        }
      });
  
      // Refresh AOS to apply the updated attributes
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      } else {
        console.warn('AOS is not initialized. Please check your AOS setup.');
      }
    }
  
    // Initial check
    updateAOSAnimation();
  
    // Update on window resize
    window.addEventListener('resize', updateAOSAnimation);
  });

  document.addEventListener('DOMContentLoaded', () => {
    function updateAOSAnimation() {
      // Select all elements with the class 'project-container'
      const containers = document.querySelectorAll('.project-container-2');
  
      containers.forEach((container) => {
        // Check the screen width and update the data-aos attribute
        if (window.innerWidth < 1000) {
          container.setAttribute('data-aos', 'fade-up');
        } else {
          container.setAttribute('data-aos', 'fade-left');
        }
      });
  
      // Refresh AOS to apply the updated attributes
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      } else {
        console.warn('AOS is not initialized. Please check your AOS setup.');
      }
    }
  
    // Initial check
    updateAOSAnimation();
  
    // Update on window resize
    window.addEventListener('resize', updateAOSAnimation);
  });
  
  let lastScrollTop = 0; // Stores the last scroll position
const navbar = document.querySelector('nav'); // Select the navbar element

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  // Check if the current scroll is greater than the last scroll (scrolling down)
  if (currentScroll > lastScrollTop) {
    // Scrolling down, hide the navbar and remove the blur effect
    navbar.classList.add('navbar-hidden');
    navbar.classList.remove('navbar-visible');
  } else {
    // Scrolling up, show the navbar and apply the blur effect
    navbar.classList.remove('navbar-hidden');
    navbar.classList.add('navbar-visible');
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevents negative scroll
});
document.getElementById('downloadBtn').addEventListener('click', function() {
  // Create an anchor tag dynamically
  var link = document.createElement('a');
  link.href = './img/Pratik_Shalgar_9326540475.pdf'; // Path to your resume
  link.download = 'Pratik_Shalgar_9326540475.pdf';  // Name the downloaded file
  link.click(); // Simulate a click to trigger download
});

// Get all the list items with the class 'redirect'
const redirectItems = document.querySelectorAll('.redirect');

// Add click event listener to each list item
redirectItems.forEach(item => {
  item.addEventListener('click', function() {
    // Get the URL stored in the data-url attribute
    const url = item.getAttribute('data-url');
    
    // Redirect to the URL
    window.location.href = url;
  });
});
// Select relevant elements with unique names
const cards = document.querySelectorAll('.card-1, .card-2, .card-3, .card-4, .card-5');
const totalCards = cards.length;
const leftArrow = document.querySelector('.left-arrow-unique');
const rightArrow = document.querySelector('.right-arrow-unique');

let currentIndex = 0; // Index of the active center card
let slideInterval;
const intervalTime = 3000; // Auto-slide interval in ms (3 seconds)

// Function to update card positions
function updateCardPositions() {
  cards.forEach((card, index) => {
    const offset = index - currentIndex;

    // Calculate position for each card
    let zIndex = -Math.abs(offset); // Lower z-index for cards farther from center
    let scale = 1 - Math.abs(offset) * 0.2; // Scale down non-center cards
    let translateX = offset * 300; // Horizontal spacing

    // Center card styles
    if (offset === 0) {
      zIndex = 10;
      scale = 1;
      card.style.opacity = 1;
    } else {
      card.style.opacity = 0.1; // Dim non-center cards
    }

    // Apply transforms
    card.style.transform = `translateX(${translateX}px) scale(${scale})`;
    card.style.zIndex = zIndex;
  });
}

// Move to the next card
function moveToNextCard() {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCardPositions();
}

// Move to the previous card
function moveToPreviousCard() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCardPositions();
}

// Auto-slide functionality
function startAutoSlide() {
  slideInterval = setInterval(moveToNextCard, intervalTime);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Event Listeners
rightArrow.addEventListener('click', () => {
  moveToNextCard();
  stopAutoSlide();
  startAutoSlide();
});

leftArrow.addEventListener('click', () => {
  moveToPreviousCard();
  stopAutoSlide();
  startAutoSlide();
});

// Pause auto-slide on hover
cards.forEach((card) => {
  card.addEventListener('mouseover', stopAutoSlide);
  card.addEventListener('mouseout', startAutoSlide);
});

// Initialize positions and auto-slide
updateCardPositions();
startAutoSlide();


const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("dark-mode");

  // Update the icon based on the current mode
  const currentMode = document.body.classList.contains("dark-mode") 
    ? '<i class="fa-regular fa-lightbulb"></i>'  // Lightbulb on for dark mode
    : '<i class="fa-solid fa-lightbulb"></i>'; // Lightbulb off for light mode

  themeToggleButton.querySelector('a').innerHTML = currentMode;
});
const themeToggleDropdownButton = document.getElementById("theme-toggle-dropdown");
themeToggleDropdownButton.addEventListener("click", () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("dark-mode");

  // Update the icon based on the current mode
  const currentMode = document.body.classList.contains("dark-mode") 
    ? '<i class="fa-regular fa-lightbulb"></i>'  // Lightbulb on for dark mode
    : '<i class="fa-solid fa-lightbulb"></i>'; // Lightbulb off for light mode

  themeToggleDropdownButton.innerHTML = currentMode;  // Update the content of the <a> tag
});

lottie.loadAnimation({
  container: document.getElementById('lottie-animation'), // Div to render the animation
  renderer: 'svg',        // Format: 'svg', 'canvas', or 'html'
  loop: true,             // Animation will loop (true/false)
  autoplay: true,         // Start automatically (true/false)
  path: './img/Business Ideas.json' // Path to your JSON file
});