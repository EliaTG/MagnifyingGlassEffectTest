

// test
const container = document.querySelector('.container');
const magnifier = document.getElementById('magnifier');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

container.addEventListener('mousemove', (e) => {
    const x = e.clientX - container.getBoundingClientRect().left;
    const y = e.clientY - container.getBoundingClientRect().top;

    const imageX = (x / container.offsetWidth) * image1.width;
    const imageY = (y / container.offsetHeight) * image1.height;

    magnifier.style.backgroundImage = `url('${image2.src}')`;
    magnifier.style.backgroundSize = `${image2.width}px ${image2.height}px`;
    magnifier.style.backgroundPosition = `-${imageX}px -${imageY}px`;

    magnifier.style.display = 'block';
    magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
});

container.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
});
