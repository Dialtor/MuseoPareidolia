const getImageSection2 = document.querySelectorAll('#img-section2');
const getImageSection3 = document.querySelectorAll('#img-section3');
const getImageSection4 = document.querySelectorAll('#img-section4');
const getimageSection6 = document.querySelectorAll('#img-section6');
// console.log(getimageSection6)
// const getModalSection5 = document.getElementById('modal-images-section4');
// const getimageSection6 = document.querySelectorAll('#img-section5');
const getModalSection2 = document.querySelector('#modal-images2');
const getModalSection3 = document.querySelector('#modal-images3');
const getModalSection4 = document.querySelector('#modal-images4');
const getModalSection6 = document.querySelector('#modal-images6');

    //SECTION 2
const getImgSection2 = (imageIndexSection2) => {
    console.log(imageIndexSection2);
        imageIndexSection2 === './assets/img/german/terminado-1.png' ? getModalSection2.innerHTML = `<img src="./assets/img/german/terminado-1.png" alt="" id="img-section2" class="img--anhelo  img-modal">`

    :   imageIndexSection2 === './assets/img/german/terminado-2.png' ? getModalSection2.innerHTML = `<img src="./assets/img/german/terminado-2.png" alt="" id="img-section2" class="img--anhelo  img-modal">`

    :   imageIndexSection2 === './assets/img/german/terminado-3.png' ? getModalSection2.innerHTML = `<img src="./assets/img/german/terminado-3.png" alt="" id="img-section2" class="img--anhelo  img-modal">`

    :   console.log('Imagen No reconocida')
}

getImageSection2.forEach(imageSection2 =>  {
    imageSection2.addEventListener('click', () => {
        getModalSection2.classList.toggle('modal-show');
        getModalSection2.classList.remove('modal-hide');
        const imageIndexSection2 = imageSection2.getAttribute('src');
        getImgSection2(imageIndexSection2);
    })
});

getModalSection2.addEventListener('click', function(){
    getModalSection2.classList.toggle('modal-show');
    getModalSection2.classList.toggle("modal-hide");
});
    //END SECTION 2

    //SECTION 3
const getImgSection3 = (imageIndexSection3) => {
    console.log(imageIndexSection3);
        imageIndexSection3 === './assets/img/gatillo_rene.png' ? getModalSection3.innerHTML = `<iframe width="80%" height="80%" src="https://www.youtube.com/embed/3IQq_T4wa5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    :   console.log('Imagen No reconocida')
}

getImageSection3.forEach(imageSection3 =>  {
    imageSection3.addEventListener('click', () => {
        getModalSection3.classList.toggle('modal-show');
        getModalSection3.classList.remove('modal-hide');
        const imageIndexSection3 = imageSection3.getAttribute('src');
        getImgSection3(imageIndexSection3);
    })
});

getModalSection3.addEventListener('click', function(){
    getModalSection3.classList.toggle('modal-show');
    getModalSection3.classList.toggle("modal-hide");
});
    //END SECTION 3



    //SECTION 4
const getImgSection4 = (imageIndexSection4) => {
    console.log(imageIndexSection4);

    imageIndexSection4 === './assets/img/dibujo_gld.mp4' ? getModalSection4.innerHTML = `<video class="gdl img--anhelo  img-modal" src="./assets/img/dibujo_gld.mp4" type="video/mp4" id="img-section3" autoplay muted loop></video>`
:   console.log('Imagen No reconocida');
}


getImageSection4.forEach(imageSection4 =>  {
    imageSection4.addEventListener('click', () => {
        getModalSection4.classList.toggle('modal-show');
        getModalSection4.classList.remove('modal-hide');
        const imageIndexSection4 = imageSection4.getAttribute('src');
        getImgSection4(imageIndexSection4);
    })
});

getModalSection4.addEventListener('click', function(){
    getModalSection4.classList.toggle('modal-show');
    getModalSection4.classList.toggle("modal-hide");
});
    //END SECTION 4





    //SECTION 6
const getImgSection6 = (imageIndexSection6) => {
    console.log(imageIndexSection6);
        imageIndexSection6 === './assets/img/anhelo1.png' ? getModalSection6.innerHTML = `<img src="./assets/img/anhelo1.png" alt="" id="img-section4" class="img--anhelo  img-modal">`

    :   imageIndexSection6 === './assets/img/anhelo2.png' ? getModalSection6.innerHTML = `<img src="./assets/img/anhelo2.png" alt="" id="img-section4" class="img--anhelo img-modal">`

    :   imageIndexSection6 === './assets/img/anhelo3.png' ? getModalSection6.innerHTML = `<img src="./assets/img/anhelo3.png" alt="" id="img-section4" class="img--anhelo img-modal">`

    :   imageIndexSection6 === './assets/img/anhelo4.png' ? getModalSection6.innerHTML = `<img src="./assets/img/anhelo4.png" alt="" id="img-section4" class="img--anhelo img-modal">`

    :   imageIndexSection6 === './assets/img/anhelo5.png' ? getModalSection6.innerHTML = `<img src="./assets/img/anhelo5.png" alt="" id="img-section4" class="img--anhelo img-modal">`

    :   imageIndexSection6 === './assets/img/anhelo-al-vacio-video-1mb.mp4' ? getModalSection6.innerHTML = ` <video id="img-section5" src="./assets/img/anhelo-al-vacio-video-1mb.mp4" class="anhelo video-section5" type="video/mp4" autoplay muted loop></video>`
    :   console.log('Imagen No reconocida')
}

getimageSection6.forEach(imageSection5 =>  {
    imageSection5.addEventListener('click', () => {
        getModalSection6.classList.toggle('modal-show');
        getModalSection6.classList.remove('modal-hide');
        const imageIndexSection6 = imageSection5.getAttribute('src');
        getImgSection6(imageIndexSection6);
    })
});

getModalSection6.addEventListener('click', function(){
    getModalSection6.classList.toggle('modal-show');
    getModalSection6.classList.toggle("modal-hide");
});
    // END SECTION 6