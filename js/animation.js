  // registers the GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

// select al icon buttons
const iconButtons = document.querySelectorAll(".icon-btn");

// select the cocktails image
const cocktailsImage = document.querySelector(".cocktails-image");

// Animate icon buttons when they scroll into view 
gsap.from (iconButtons, {
    scrollTrigger: {
      trigger: ".scroll-icons",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

