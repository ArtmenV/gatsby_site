export const setVhUnit = () => {
  let vh = window.innerHeight * 0.01

  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export const isObjectEmpty = (obj) => {
  for(let key in obj) {
    if(obj.hasOwnProperty(key))
      return false
  }

  return true
}

/**
 * It changes the menu color to blue when menu icon is inside passed sections
 *
 * @param {Array<string>} sections - section's classnames
 */
export const changeMenuColor = sections => {
  const hamburgerMenu = document.querySelector('.menu-btn')
  const isBlue = hamburgerMenu.classList.contains('menu-btn--blue')
  let needChangeToBlue = false

  for (let i = 0; i < sections.length; i++) {
    const {
      top,
      bottom
    } = document.querySelector(`.${sections[i]}`).getBoundingClientRect()

    if (top <= 50 && bottom > 50) {
      needChangeToBlue = true
      break
    }
  }

  if (!isBlue && needChangeToBlue) {
    hamburgerMenu.classList.add('menu-btn--blue')
  } else if (isBlue && !needChangeToBlue) {
    hamburgerMenu.classList.remove('menu-btn--blue')
  }
}


export const handleKeyNav = (keyboard, { prevSite, nextSite }) => {
  switch(keyboard) {
    case 'ArrowLeft':
      window.location.href = prevSite
      break
    case 'ArrowRight':
      window.location.href = nextSite
      break
    default:
      break
  }
}
