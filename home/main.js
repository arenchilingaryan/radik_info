// import './home.css'
// import '../style.css'


const box1 = document.getElementById('item-1')
const box2 = document.getElementById('item-2')
const box3 = document.getElementById('item-3')


let swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });