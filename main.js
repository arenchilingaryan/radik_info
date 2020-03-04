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

onSetBodyColorLeft = () => {
    const bg = document.getElementById('bg')
    bg.style.transition = '.5s'
    bg.style.background = 'linear-gradient(#03a9f4, #e91e63)'
}
onSetBodyColorCenter = () => {
    const bg = document.getElementById('bg')
    bg.style.transition = '.5s'
    bg.style.background = 'linear-gradient(#ffc107, #57ff57)'
}
onSetBodyColorRight = () => {
    const bg = document.getElementById('bg')
    bg.style.transition = '.5s'
    bg.style.background = 'linear-gradient(#ffc107, #e91e63)'
}
onUnSetBodyColor = () => {
    const bg = document.getElementById('bg')
    bg.style.background = 'transparent'
}

box1.addEventListener('mouseover', onSetBodyColorLeft);
box2.addEventListener('mouseover', onSetBodyColorCenter);
box3.addEventListener('mouseover', onSetBodyColorRight);

box1.addEventListener('mouseout', onUnSetBodyColor);
box2.addEventListener('mouseout', onUnSetBodyColor);
box3.addEventListener('mouseout', onUnSetBodyColor);

