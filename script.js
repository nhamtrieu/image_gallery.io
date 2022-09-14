let imgElms = document.querySelectorAll('.img');
let overlayElm = document.querySelector('.overlay');
let divImgOverlayElm = document.querySelector('.img-overlay')
let imgOverlayElm = document.querySelector('.img-overlay img');
let closeBtn = document.querySelector('.close');
let priviousBtn = document.querySelector('.privious');
let nextBtn = document.querySelector('.next');

let currentIndex;

imgElms.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index + 1;
        showGallery();
        imgOverlayElm.src = `./img/img${index + 1}.jpeg`;
        divImgOverlayElm.style.display = 'block';
        nextBtn.addEventListener('click', () => {
            if(currentIndex === 1) {
                currentIndex += 1;
                next(currentIndex);
            } else if(currentIndex > 1 & currentIndex < 8) {
                currentIndex += 1;
                next(currentIndex);
            } else {
            }
        })
        priviousBtn.addEventListener('click', () => {
            if(currentIndex === 1) {

            } else {
                currentIndex -= 1;
                privious(currentIndex);
            }
        })
    })

})

let showGallery = () => {
    overlayElm.classList.add('show');
    overlayElm.classList.remove('hidden'); 
}

let hiddenGallery = () => {
    overlayElm.classList.add('hidden');
    overlayElm.classList.remove('show');
}

closeBtn.addEventListener('click', () => {
    hiddenGallery();
})

let next = (currentIndex) => {
    imgOverlayElm.src = `./img/img${currentIndex}.jpeg`;
}

let privious = (currentIndex) => {
    imgOverlayElm.src = `./img/img${currentIndex}.jpeg`
}