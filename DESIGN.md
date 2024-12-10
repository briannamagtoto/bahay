# BAHAY Design

## Overview

BAHAY uses visual design to guide viewers in an engaging way---using animations and dynamic text effects made using GSAP (a Javascript animation library). 


### Layout/Structure

The website was designed with simplicity in mind, and is pretty minimalistic. The layout is built using HTML and CSS.

I divided the website into distinct sections: 
1. **Animated Reveal**: The first part is an animated reveal of the website in order to make the experience more compelling. 
2. **Introduction**: This is the first section that includes a video from my childhood with a scrolling marquee of text at the top
3. **Main Content**: A series of text and images describe different aspects of the experience, with text that alternates positions to create a sense of movement and change.
4. **Final Message**: The website ends with a final scrolling text, summarizing the journey and leaving the viewer with a question to ponder. 

I chose to structure the website as a single page to make the scrolling experience a continuous flow.

### Visual Design

The visual design uses a soft, warm color palette with accents of floral-themed backgrounds. The primary font used is **Instrument Serif** from Google Fonts & a basic cursive font, which (in my opinion) gives the website a personal, nostalgic feel. 

The background video is really important in setting the emotional tone of the website-- it showcases scenes of childhood that connect home and nostalgia.

### Animations / Interactivity / GSAP

A large focus of the design was creating  animations that make the website feel dynamic as a user sroll.s I used the **GSAP (GreenSock Animation Platform)** library to do this. More specifically, I used the **ScrollTrigger** feature to trigger animations when the user scrolls through the page. I added text fade-ins-- as the user scrolls text elements fade into view which creates a sense of movement. I also added scrolling text effects that appear at the top and bottom of the website. And lastly, I added images that were animated to appear as the user scrolls.

I specifically chose GSAP for the animations because it allowed me to use JavaScript, something I learned in the course and could build on. It gave me the flexibility to create animations without worrying about the limitations of CSS alone. 