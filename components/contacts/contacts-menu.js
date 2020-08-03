const content = document.getElementById('content')
const btn = document.getElementById('nav-cta')

btn.addEventListener('click', () => {
  if (content.classList.length == 1) {
    content.classList.add('close')
  } else {
    content.classList.remove('close')
  }
})