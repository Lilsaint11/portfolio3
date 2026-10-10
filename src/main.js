import './style.css'

document.querySelector('#year').textContent = new Date().getFullYear()

const menuButton = document.querySelector('#menu-button')
const nav = document.querySelector('#site-nav')

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.innerHTML = open ? 'Close <span>−</span>' : 'Menu <span>+</span>'
})

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.innerHTML = 'Menu <span>+</span>'
  })
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    nav.classList.remove('open')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.innerHTML = 'Menu <span>+</span>'
  }
})

const revealItems = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  revealItems.forEach((item) => observer.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add('visible'))
}
