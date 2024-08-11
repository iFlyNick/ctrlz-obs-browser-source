let img1Path;
let img2Path;

function init() {
    setImages();
    getSessionStorageCounter() === null ? setSessionStorageCounter(0) : initSwap();
    addImageListeners();
};

function initSwap() {
    incrementRefreshCounter();

    var swapTimeout = 250;
    swapToSecondImage(swapTimeout);
};

function swapToSecondImage(timeout) {
    console.log('swapping to second image');
    document.getElementById("swapper").src=img2Path;
    setTimeout(() => {
        swapToBaseImage();
    }, timeout);
};

function swapToBaseImage() {
    console.log('swapping to base image');
    document.getElementById("swapper").src=img1Path;
};

function incrementRefreshCounter() {
    var lastCount = Number(getSessionStorageCounter()) || 0;
    var newCount = lastCount + 1;
    setSessionStorageCounter(newCount);

    document.getElementById("counter").innerHTML = `<h1>${newCount}</h1>`;
};

function getSessionStorageCounter() {
    return sessionStorage.getItem('ctrlzCounter');
};

function setSessionStorageCounter(val) {
    sessionStorage.setItem('ctrlzCounter', val);
};

function setImages() {
    img1Path = getImgPath('ctrlz-image1');
    swapToBaseImage();
    img2Path = getImgPath('ctrlz-image2');
}

function getImgPath(key) {
    return localStorage.getItem(key);
};

function addImageListeners() {
    var elements = document.getElementsByClassName('imageData');

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('change', updateImageData);
    };
};

function updateImageData() {
    var file = this.files[0];
    var targetImage = this.parentNode.id;
    var fileKey = `ctrlz-${targetImage}`;

    if (file) {
        var reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {
            var dataUrl = reader.result;
            localStorage.setItem(fileKey, dataUrl);
        };
    };
};

init();