const btnMenu = document.querySelector('.btn-mobile-nav')
const header = document.querySelector('.header')

// Click show nav-bar mobile
btnMenu.addEventListener('click', () => {
  header.classList.toggle('nav-open')
})

// click to scroll to section
function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false
  }

  return link.hash
}

function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false
  if (elem) {
    if (e) e.preventDefault()
    gsap.to(window, { scrollTo: elem })
  }
}

document.querySelectorAll('a[href]').forEach((a) => {
  a.addEventListener('click', (e) => {
    scrollToHash(getSamePageAnchor(a), e)
  })
})

scrollToHash(window.location.hash)

// COUNT UP
const counter = document.querySelector('.counter')
const updateCounter = () => {
  const target = +counter.getAttribute('data-target')
  const current = +counter.innerText.replace(/,/g, '').replace(/\+/g, '')

  const increment = target / 500

  if (current < target) {
    const newVal = Math.ceil(current + increment)
    counter.innerText = newVal.toLocaleString() + '+'
    setTimeout(updateCounter, 10)
  } else {
    counter.innerText = target.toLocaleString() + '+'
  }
}
updateCounter()
