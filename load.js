
// PRE LOADING OF LANDING PAGRE
var preloader = document.getElementById('loader-wrapper');

function myFunction(){
    preloader.style.display = 'none';
}

// READ MORE BUTTOM

const readMore = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMore.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if(readMore.innerHTML === 'Read More'){
        readMore.innerHTML = 'Read Less';
    }else{
        readMore.innerHTML = 'Read More';
    }
})