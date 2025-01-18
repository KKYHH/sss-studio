// window.onload = function () {

const menuOpen = document.querySelector('.gnb .menuOpen')
const menuBox = document.querySelector('.gnb .menuBox')

menuOpen.addEventListener('click', () => {
  menuBox.classList.toggle('on')
})

// GSAP 
gsap.registerPlugin(ScrollTrigger)

// visual
gsap.timeline({
  scrollTrigger: {
    trigger: '.visual',
    start: '100% 100%',
    end: '100% 0%',
    scrub: 1,
    markers: true
  }
})
  .to('.logoWrap #S1', { x: -150, y: 250, rotate: 20, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S2', { x: -30, y: 250, rotate: -10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S3', { x: -0, y: 400, rotate: -10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S4', { x: 50, y: 300, rotate: 10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S5', { x: 100, y: 100, rotate: -10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S6', { x: 50, y: 450, rotate: 20, ease: 'none', duration: 5 }, 0)

// }