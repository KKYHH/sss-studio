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
    // markers: true
  }
})
  .to('.logoWrap #S1', { x: -150, y: 250, rotate: 30, ease: 'none', duration: 5 }, 0) // 0 값이 없으면 .to 순차 재생
  .to('.logoWrap #S2', { x: -60, y: 450, rotate: 20, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S3', { x: -0, y: 500, rotate: -10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S4', { x: 50, y: 300, rotate: 10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S5', { x: 100, y: 100, rotate: -10, ease: 'none', duration: 5 }, 0)
  .to('.logoWrap #S6', { x: -10, y: 450, rotate: -10, ease: 'none', duration: 5 }, 0)


// .mainTextBox .title
// HTML의 같은 html 클래스들을 배열로 만들고 애니메이션을 한번에 적용
gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      start: '100% 100%',
      end: '100% 100%',
      scrub: 1,
      // markers: true
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
      // markers: true
    }
  })
    .fromTo(selector, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: 'none', duration: 5 }, 0)
})

// .con1 textAni

let textAniList = document.querySelectorAll('.con1 .textAni li');
let textAni = gsap.timeline({ repeat: -1 });

for (let i = 0; i < textAniList.length; i++) {
  textAni.to(textAniList[i], 0.8, { opacity: 1, repeat: 1, delay: 0, x: 0, yoyo: true, ease: 'power4.out' })
}

textAni.play();

// .con4 listBox
gsap.utils.toArray('.con4 .listBox .box').forEach((selector) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      start: '0% 20%',
      end: '0% 0%',
      scrub: 1,
      // markers: true
    }
  })
    .to(selector, { transform: 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter: 'brightness(0.3)' }, 0)
})

// .con3 listBox 카드

gsap.utils.toArray('.con3 .listBox li').forEach((selector, t) => {
  // create()는 ScrollTrigger가 대문자
  ScrollTrigger.create({
    trigger: selector,
    start: '-125% 50%',
    onEnter: () => {
      gsap.set(selector, {
        rotationX: '-65deg',
        z: '-500px',
        opacity: 0
      }),
        gsap.to(selector, {
          rotationX: 0,
          z: 0,
          opacity: 1,
          delay: t % 3 * .05
        })
    },
    // markers: true
  })
})

// .con5 list Box hover되면 이미지 보여주기

let listBox = document.querySelectorAll('.con5 .listBox li');
let imgBox = document.querySelector('.con5 .imgBox')
let img = document.querySelector('.con5 .imgBox img')

for (let i = 0; i < listBox.length; i++) {

  listBox[i].addEventListener('mouseover', () => {
    img.src = `./images/sss_box.png`;

    gsap.killTweensOf(imgBox);
    gsap.set(imgBox, { scale: 0, opacity: 0, duration: .3 }),
      gsap.to(imgBox, { scale: 1, opacity: 1, duration: .5 })

  })

  listBox[i].addEventListener('mousemove', (e) => {

    let imgBoxX = e.pageX + 20;
    let imgBoxY = e.pageY - 20;
    imgBox.style.left = imgBoxX + 'px';
    imgBox.style.top = imgBoxY + 'px';

  })

  listBox[i].addEventListener('mouseleave', () => {

    gsap.killTweensOf(imgBox);
    gsap.to(imgBox, { scale: 0, opacity: 0, duration: .2 })

  })
}

gsap.timeline({

  scrollTrigger: {
    trigger: '.con5',
    start: '0% 100%',
    end: '100% 0%',
    toggleClass: { targets: '.wrap', className: 'on' }
  }

})

// footer

gsap.timeline({
  scrollTrigger: {
    trigger: 'footer',
    start: '0% 100%',
    end: '100% 0%',
    scrub: 1,
    markers: true
  }
})
  .to('.logoWrap', { top: '10%', ease: 'none', duration: 5 }, 0)
// }

// Loading

let loading = document.querySelector('.loading');
let rotate = document.querySelectorAll('.rotate');
let opacity = document.querySelectorAll('.opacity');

setTimeout(() => loading.classList.add('scene1'), 0),
  setTimeout(() => loading.classList.add('scene2'), 1500),
  setTimeout(() => loading.classList.remove('scene1', 'scene2'), 2500),
  setTimeout(() => rotate.forEach(rotate => { rotate.classList.add('on') }), 2500),
  setTimeout(() => opacity.forEach(opacity => { opacity.classList.add('on') }), 2500)
