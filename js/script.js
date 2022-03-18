// mobile menu
function getElement (elementId) {
  const element = document.getElementById(elementId)
  return element
}

const burger = getElement('hamburger-icon')

function toggleMobileMenu() {
  burger.classList.toggle('open')
}
function closeMobileMenu() {
  const burgerId = burger.getAttribute('class')
  if (burgerId === 'open') {
    burger.classList.toggle('open')
  }
}
function toogleTerms() {
  const termsElement = getElement('modal')
  termsElement.classList.toggle('show')
}

getElement('hamburger-icon').addEventListener('click', toggleMobileMenu)
getElement('skills').addEventListener('click', closeMobileMenu)
getElement('contact').addEventListener('click', closeMobileMenu)
getElement('footer').addEventListener('click', closeMobileMenu)
getElement('terms').addEventListener('click', toogleTerms)
getElement('modalClose').addEventListener('click', function(e){
  e.preventDefault()
  toogleTerms()
})

//scroll to anchors
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}