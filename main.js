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
    scrub: 1, // scrub이 없으면 start 시점에 자동으로 애니메이션 재생, 설정하면 값만큼 스크롤 따라 애니메이션 재생 1,2,3 or true
    markers: true
  }
})
  .to('.logoWrap #S1', { x: -150, y: 250, rotate: 20, ease: 'none', duration: 5 }, 0) // 0 값이 없으면 .to 순차 재생
  .to('.logoWrap #S2', { x: -60, y: 450, rotate: 30, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S3', { x: -0, y: 500, rotate: -10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S4', { x: 50, y: 300, rotate: 10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S5', { x: 100, y: 100, rotate: -10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S6', { x: 50, y: 450, rotate: 20, ease: 'none', duration: 5 }, 0)


// .mainTextBox .title
// HTML의 같은 html 클래스들을 배열로 만들고 애니메이션을 한번에 적용
gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      start: '100% 100%',
      end: '100% 100%',
      scrub: 1,
      markers: true
    }
  })
    .fromTo(selector, { overflow: 'hidden', y: 150 }, { y: 0, ease: 'none', duration: 5 }, 0)
})

// .subText p

gsap.utils.toArray('.subText p').forEach((selector) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      start: '100% 100%',
      end: '100% 100%',
      scrub: 1,
      markers: true
    }
  })
    .fromTo(selector, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: 'none', duration: 5 }, 0)
})
// }