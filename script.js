document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
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
  });
  