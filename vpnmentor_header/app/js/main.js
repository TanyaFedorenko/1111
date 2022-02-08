const burger =document.querySelector('#burger');
const nav =document.querySelector('nav')

const subNav = document.querySelector('.nav__sub-links')



burger.addEventListener('click',(e)=>{
nav.classList.toggle('active')
burger.classList.toggle('active')

})
