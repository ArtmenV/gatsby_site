import React, { useRef } from 'react'

export default ({ title, children }) => {
  const menuItems = useRef(null)
  const icon = useRef(null)

  const handleClick = () => {
    // Close
    if (icon.current.classList.contains('btn-menu__icon--toggled')) {
      icon.current.classList.remove('btn-menu__icon--toggled')
      menuItems.current.style.maxHeight = 0

      return
    }
      // Open
      // Close all submenu
      const icons = document.querySelectorAll('.submenu .btn-menu__icon')
      const items = document.querySelectorAll('.submenu .submenu__list')

      icons.forEach(icon => icon.classList.remove('btn-menu__icon--toggled'))
      items.forEach(item => item.style.maxHeight = 0)

      // Open current submenu
      icon.current.classList.add('btn-menu__icon--toggled')
      menuItems.current.style.maxHeight = menuItems.current.scrollHeight + 'px'
  }

  return (
    <li className="submenu">
      <div className="submenu-contents">
        <button 
          onClick={ handleClick }
          className="btn-menu"
          aria-label="Expand menu"
        >
          { title }
          <span
            ref={ icon } 
            className='btn-menu__icon'
          />
        </button>

        <ul 
          ref={ menuItems } 
          className="submenu__list"
        >
          { children }
        </ul>
      </div>
    </li>
  )
}
