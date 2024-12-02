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
