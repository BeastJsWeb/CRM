import {useContext} from 'react'

import cl from './cl.module.scss'
import { NavLink } from 'react-router-dom'
import { iconsSidebar } from '../../../assets/icons/icons'
import { sidebarContext } from '../../../utils/context'

const menu = [
  {value: 'Главная', href: '/', icon: iconsSidebar.home},
  {value: 'Поиск адресов', href: 'address', icon: iconsSidebar.search},
  {value: 'Таблицы', href: 'Таблицы', icon: iconsSidebar.table},
  {value: 'Календарь', href: 'Календарь', icon: iconsSidebar.calendar},
  {value: 'Карты', href: 'Карты', icon: iconsSidebar.map},
  {value: 'Виджеты', href: 'Виджеты', icon: iconsSidebar.widget},
  {value: 'Настройки', href: 'Настройки', icon: iconsSidebar.settings,
    list: [
      {value: 'Настройки профиля', href: 'Настройки профиля', icon: iconsSidebar.setProf},
      {value: 'Управление финансами', href: 'Управление финансами', icon: iconsSidebar.setFin},
    ]
  },
  {value: 'Выход', href: 'Выход', icon: iconsSidebar.exit}
]

export const Sidebar = () => {
  const {isNav} = useContext(sidebarContext)

  return (
    <nav className={isNav ? cl.navActive : cl.nav}>
      <h4>Меню</h4>
      <ul>
        {menu.map(el => 
          !el.list
          ?
          <li key={el.value} >
            <NavLink to={el.href} end >
              {el.icon}
              {el.value}
            </NavLink>
          </li>
          :
          <li key={el.value} >
            <details>
              <summary>
                {el.icon}
                {el.value}
              </summary>
              <div>
                {el.list.map(e =>
                <NavLink to={el.href}  key={e.value} >
                  {e.icon}
                  {e.value}
                </NavLink>
                )}
              </div>
            </details>
          </li>
        )}
      </ul>
    </nav>
  )
}
