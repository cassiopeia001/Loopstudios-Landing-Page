const headerNav= document.querySelector('.header__nav');
const hamburgerIcon= document.querySelector('.header__hamburger-icon');
const headerList= document.querySelector('.header__list');

hamburgerIcon.addEventListener('click', function(){
    
    const contains= headerNav.classList.contains('active');
    const img= hamburgerIcon.querySelector('img');
    if(!contains){
        img.src= "images/icon-close.svg";
        headerNav.classList.add('active');
        headerList.classList.add('active');
    }
    else{
        headerNav.classList.remove('active')
        headerList.classList.remove('active');
        img.src= "images/icon-hamburger.svg";
    }
});