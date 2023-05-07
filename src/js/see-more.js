
const seeMore = document.querySelector('.see-more-btn');
// const nextBook = document.querySelector('.img-card');
let currentItems = 1;

seeMore.addEventListener('click', (event) => {

    event.preventDefault();

    const nextElementList = [...document.querySelectorAll('img.card')];

    event.target.classList.add('show-loader');

    for (let i = 0; i <= currentItems; i++) {

        setTimeout(function () {
            event.target.classList.remove('show-loader');
            if (nextElementList[i]) {

                nextElementList[i].style.display = 'flex';
            }
        }, 1000);
                
    }
    currentItems += 1;
    
    if (currentItems >= elementList.length) {
        event.target.classList.add('loaded');
    }
});
    

