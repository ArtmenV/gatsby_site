setVhUnit()

// window.addEventListener('resize', () => {
//   setVhUnit()
// })

window.addEventListener('resize', setVhUnit)

function setVhUnit() {
  let vh = window.innerHeight * 0.01

  document.documentElement.style.setProperty('--vh', `${vh}px`)
}