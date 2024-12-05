document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Preloader animation
    // Animate bars
    gsap.to(".bar", 1.5, {
        delay: 3.5,
        height: 0,
        stagger: {
            amount: 0.5
        },
        ease: "power4.inOut",
    });
    // Animate BAHAY text
    gsap.fromTo(
        ".bahay-title", 
        { opacity: 0, scale: 0.5 }, 
        { 
            opacity: 1, 
            scale: 1, 
            delay: 3.5, 
            duration: 1.2, 
            ease: "power2.out",
            onComplete: () => {
            },
        }
    );

    // Disappear after a delay (bahay-text)
    gsap.to(".bahay-text", {
        opacity: 0,
        scale: 0.5,
        delay: 1.5, // Disappear shortly after appearing
        duration: 1,
        ease: "power2.in",
    });

    // Disppear after delay (flower)
    gsap.to("#flower-img", {
        opacity: 0,
        scale: 0.5,
        delay: 1.5, 
        duration: 1,
        ease: "power2.in",
    });

// Text marquee animation
    // select elements
    const container = document.querySelector('.text-container');
    const text = document.querySelector('.scrolling-text');
  
    // dynamically clone the text to fill the container's width
    let containerWidth = container.offsetWidth;
    let textWidth = text.offsetWidth;
  
    while (textWidth < containerWidth * 3) { 
      const clone = text.cloneNode(true);   
      container.appendChild(clone);        
      textWidth += clone.offsetWidth;       
    }
  
    // GSAP animation to scroll text infinitely
    gsap.fromTo(
      container.children,                
      { x: 0 },                             
      {
        x: `-${containerWidth}px`,         
        duration: 10,                     
        ease: "none",                       
        repeat: -1                         
      }
    );


// GSAP animation for "BAHAY" text entrance
gsap.fromTo(
    ".bahay-title", 
    { opacity: 0, scale: 0.5 }, 
    { 
      opacity: 1, 
      scale: 1, 
      delay: 3.5, 
      duration: 1.2, 
      ease: "power2.out",
      onComplete: () => {
        // Trigger the scroll text and arrow animations after "BAHAY" appears
        triggerScrollAnimations();
      }
    }
  );
  
  // Function to trigger the scroll text and arrow animations
  function triggerScrollAnimations() {
    gsap.to(".scroll-text", {
      opacity: 1, 
      visibility: "visible", 
      duration: 1,
      delay: 0.5, 
      ease: "power1.inOut",
      repeat: -1, 
      yoyo: true, 
    });
  
    gsap.to(".arrow-container", {
      opacity: 1, 
      visibility: "visible", 
      duration: 1,
      delay: 0.5, 
      ease: "power1.inOut",
    });
  
    // GSAP animation for the arrow bouncing up and down
    gsap.to(".arrow", {
      y: 10, 
      repeat: -1, 
      yoyo: true, 
      duration: 1, 
      ease: "power1.inOut",
    });
  }  
    
  });
  