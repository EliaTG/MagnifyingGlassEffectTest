

// test
const container = document.querySelector('.container');
const magnifier = document.getElementById('magnifier');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');


const scale = 0.8;

container.addEventListener('mousemove', (e) => {
    const x = e.clientX - container.getBoundingClientRect().left;
    const y = e.clientY - container.getBoundingClientRect().top;

    const imageX = (x / container.offsetWidth) * (image1.width * scale);
    const imageY = (y / container.offsetHeight) * (image1.height * scale);

    magnifier.style.backgroundImage = `url('${image2.src}')`;
    magnifier.style.backgroundSize = `${image1.width}px ${image1.height}px`; // Usa el tamaño de la imagen 1
    magnifier.style.backgroundPosition = `-${imageX}px -${imageY}px`;
    
    magnifier.style.display = 'block';
    magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
});


container.addEventListener('mouseenter', () => {
    magnifier.style.display = 'block';
});

container.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
});


// Touchmove for mobile and tablet versions


container.addEventListener('mousemove', (e) => {
    updateMagnifier(e.clientX, e.clientY);
});

container.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
        e.preventDefault(); 
        const touch = e.touches[0];
        updateMagnifier(touch.clientX, touch.clientY);
    }
});

container.addEventListener('mouseenter', () => {
    magnifier.style.display = 'block';
});

container.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
});

function updateMagnifier(x, y) {
    const containerRect = container.getBoundingClientRect();
    const imageX = ((x - containerRect.left) / container.offsetWidth) * (image1.width * scale);
    const imageY = ((y - containerRect.top) / container.offsetHeight) * (image1.height * scale);

    magnifier.style.backgroundImage = `url('${image2.src}')`;
    magnifier.style.backgroundSize = `${image1.width}px ${image1.height}px`;
    magnifier.style.backgroundPosition = `-${imageX}px -${imageY}px`;

    magnifier.style.display = 'block';
    magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
}