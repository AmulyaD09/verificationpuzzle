const img1El = document.querySelector('#img-1');
const img2El = document.querySelector('#img-2');
const sliderEl = document.querySelector('#slider');
const wrapperEl = document.querySelector('#wrapper');
const congratsEl = document.querySelector('#congrats');
const resetBtn = document.querySelector('#reset');

const BUFFER = 2;

sliderEl.min = -(Math.floor(Math.random() * 120) + 60);
sliderEl.max = (Math.floor(Math.random() * 120) + 60);
sliderEl.value = sliderEl.min;


rotateImages();

sliderEl.addEventListener('change', verify); 

resetBtn.addEventListener('click', () => {
    sliderEl.value = sliderEl.min;
    rotateImages();
    wrapperEl.classList.remove('opacity-0');
    congratsEl.classList.remove('opacity-100');
    congratsEl.classList.add('-z-10');
});



sliderEl.addEventListener('input', () => {
    rotateImages()
});


function rotateImages() {
    const rotation = sliderEl.value;
    img1El.style.rotate = `${rotation}deg`;
    img2El.style.transform = `translate(-50%, -50%) rotate(${-rotation}deg)`;
}

function verify() {
    const rotation = sliderEl.value;

    if (rotation < BUFFER && rotation > -BUFFER) {
        wrapperEl.classList.add('opacity-0');
        congratsEl.classList.add('opacity-100');
        congratsEl.classList.remove('-z-10');
    } else {
        alert('You noob. Try again!')
    }
}