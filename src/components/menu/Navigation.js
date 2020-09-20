import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'gatsby'

import { isMenuOpen } from '../../redux/actions/menuActions'

import MenuItem from './MenuItem'
import Submenu from './SubMenu'

import { menuItems } from '../../constants'

export default () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    document.querySelector('body').classList.remove('noscroll')
    dispatch(isMenuOpen(false))
  }

  const createMenu = menuItems => (
    menuItems.map(item => (
      
      Array.isArray(item.items) ? (
        <Submenu 
          title={ item.title }
          key={ item.title }
        >
          { 
            item.items.map((item, index) => (
              <li 
                className="submenu__list-item" 
                key={ index }
              >
                <Link 
                  to={ item.link }
                  className="submenu__link"
                  onClick={ handleClick }
                >
                  { item.title }
                </Link>
              </li>
            ))
          }
        </Submenu>
      ) : (
        <MenuItem 
          title={ item.title }
          link={ item.link }
          key={ item.title }
        />
      )
    ))
  )

  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          createMenu(menuItems)
        }
      </ul>
    </nav>
  )
}
