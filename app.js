

// test
const container = document.querySelector('.container');
const magnifier = document.getElementById('magnifier');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');


const scale = 0.8;

container.addEventListener('mousemove', (e) => {
    const x = e.clientX - container.getBoundingClientRect().left;
    const y = e.clientY - container.getBoundingClientRect().top;

    // const imageX = (x / container.offsetWidth) * image1.width;
    // const imageY = (y / container.offsetHeight) * image1.height;

    // const imageX2 = (x / container.offsetWidth) * image2.width;
    // const imageY2 = (y / container.offsetHeight) * image2.height;

    const imageX = (x / container.offsetWidth) * (image1.width * scale);
    const imageY = (y / container.offsetHeight) * (image1.height * scale);

    // const imageX2 = (x / container.offsetWidth) * (image2.width * scale);
    // const imageY2 = (y / container.offsetHeight) * (image2.height * scale);

    // console.log("Este es width de la primera imagen: "+imageX+ " y la segunda "+imageX2)
    // console.log("Este es height de la primera imagen: "+imageY+ " y la segunda "+imageX2)


    magnifier.style.backgroundImage = `url('${image2.src}')`;
    magnifier.style.backgroundSize = `${image1.width}px ${image1.height}px`; // Usa el tamaño de la imagen 1
    magnifier.style.backgroundPosition = `-${imageX}px -${imageY}px`;
    // magnifier.style.backgroundSize = `${image1.width * scale}px ${image1.height * scale}px`;
    
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

