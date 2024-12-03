document.addEventListener("DOMContentLoaded", () => {
    // Register the GSAP ScrollTrigger plugin (if used in other animations)
    gsap.registerPlugin(ScrollTrigger);
  
    // Select elements
    const container = document.querySelector('.text-container');
    const text = document.querySelector('.scrolling-text');
  
    // Dynamically clone the text to fill the container's width
    let containerWidth = container.offsetWidth;
    let textWidth = text.offsetWidth;
  
    while (textWidth < containerWidth * 2) { // Clone until it's twice the container width
      const clone = text.cloneNode(true);   // Create a clone of the text
      container.appendChild(clone);         // Append the clone to the container
      textWidth += clone.offsetWidth;       // Update the total width of all text
    }
  
    // GSAP animation to scroll text infinitely
    gsap.fromTo(
      container.children,                   // Apply animation to all child elements
      { x: 0 },                             // Start position
      {
        x: `-${containerWidth}px`,          // Scroll left by the container's width
        duration: 10,                       // Duration for one full scroll
        ease: "none",                       // Linear movement for smooth looping
        repeat: -1                          // Infinite loop
      }
    );
  });
  