document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // preloader animation
    // animate bars
    gsap.to(".bar", 1.5, {
        delay: 3.5,
        height: 0,
        stagger: {
            amount: 0.5
        },
        ease: "power4.inOut",
    });

    // disappear after a delay (bahay-text)
    gsap.to(".bahay-text", {
        opacity: 0,
        scale: 0.5,
        delay: 1.5, // disappear shortly after appearing
        duration: 1,
        ease: "power2.in",
    });

    // disppear after delay (flower)
    gsap.to("#flower-img", {
        opacity: 0,
        scale: 0.5,
        delay: 1.5, 
        duration: 1,
        ease: "power2.in",
    });

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
                // trigger the scroll text and arrow animations after "BAHAY" appears
                triggerScrollAnimations();
            }
            }
        );

    // text marquee animation
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
  
  // function to trigger the scroll text and arrow animations
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

    // Section 2 ScrollTrigger animations
    gsap.from(".section-2 .childhood-text", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".section-2",
            start: "top bottom", 
            end: "bottom top",   
            scrub: true,         
        }
    });

    // staggered animation for text
    gsap.from(".section-2 .childhood-text .c1", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".section-2",
            start: "top bottom", 
            end: "bottom top",  
            scrub: true,         
    }
    });

    gsap.from(".section-2 .childhood-text .c2", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5,  
        scrollTrigger: {
            trigger: ".section-2",
            start: "top bottom", 
            end: "bottom top",   
            scrub: true,         
        }
    });

    // images roll in one by one
    gsap.from(".section-2 .childhood-image", {
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".section-2",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
    });

    //section 3 -- clear to blurry text
    gsap.fromTo(
        ".blurry-text",
        { filter: "blur(0px)" }, 
        {
          filter: "blur(5px)",    
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".blurry-text",
            start: "top 60%",    
            end: "top 20%",      
            scrub: true,          
          },
        }
      );
      
      // questions about home roll in
      gsap.from(".home-question .question-part", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.25,   
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-3", 
          start: "top bottom",    
          end: "bottom top",      
          scrub: true,            
        },
      });

  });
  