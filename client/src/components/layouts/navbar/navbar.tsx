import {useContext} from 'react'
import { NavLink } from 'react-router-dom'

import cl from './style.module.scss'
import { iconsHeader } from '../../../assets/icons/icons'
import { sidebarContext } from '../../../utils/context'

export const Navbar = () => {

  const sidebar = useContext(sidebarContext)

  return (
    <header className={cl.navbar} > 
      <div onClick={sidebar.hanlde} >
        {iconsHeader.logo}
        Wrench CRM
      </div>
      <NavLink to='/person' >
        {iconsHeader.person}
        Имя Фамилия
      </NavLink>
    </header>
  )
}
