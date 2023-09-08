
// Button pulse effect
document.addEventListener("DOMContentLoaded", () => {
    const cta = document.querySelector(".cta");
    const pulseTween = gsap.to(cta, { scale: 0.9, repeat: 9, yoyo: true,  paused: true});
    
    function mouseEnter() {
        pulseTween.restart();
    }
    function mouseLeave() {
        pulseTween.restart();
    }
    function touchMove() {
        mouseEnter();
    }

    cta.addEventListener("mouseenter", mouseEnter);
    cta.addEventListener("mouseleave", mouseLeave);
    cta.addEventListener("touchmove", touchMove);


});

// DOM manipulation
const container = document.querySelector('.container');
const magnifier = document.getElementById('magnifier');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');


let zoomLevel = 2; // Here you can adjust the zoom level.

// Change the size of the second image based on the zoom.
image2.style.width = `${image1.width * zoomLevel}px`;
image2.style.height = `${image1.height * zoomLevel}px`;

// Show the magnifier when the cursor enters the container.
container.addEventListener('mouseenter', () => {
    magnifier.style.display = 'block';
});

// Hide the magnifier when the cursor leaves the container.
container.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
});

function handleMove(e) {
    let x, y;
    
    if (e.type === 'mousemove') {
        x = e.clientX - container.getBoundingClientRect().left;
        y = e.clientY - container.getBoundingClientRect().top;
    } else if (e.type === 'touchmove') {
        if (e.touches.length === 1) {
            e.preventDefault();
            const touch = e.touches[0];
            x = touch.clientX - container.getBoundingClientRect().left;
            y = touch.clientY - container.getBoundingClientRect().top;
        }
    }

    if (x !== undefined && y !== undefined) {

        const imageX = (x / container.offsetWidth) * (image1.width * zoomLevel);
        const imageY = (y / container.offsetHeight) * (image1.height * zoomLevel);

        magnifier.style.backgroundImage = `url('${image2.src}')`;
        magnifier.style.backgroundSize = `${image2.width}px ${image2.height}px`; 
        magnifier.style.backgroundPosition = `-${imageX}px -${imageY}px`;


        magnifier.style.display = 'block';
        magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
        magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
    }
}

container.addEventListener('mousemove', handleMove);
container.addEventListener('touchmove', handleMove);

