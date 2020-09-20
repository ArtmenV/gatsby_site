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