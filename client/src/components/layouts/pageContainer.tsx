import {Outlet} from 'react-router-dom'
import { Sidebar } from './sidebar'

import { Navbar } from './navbar/navbar'

export const PageContainer = () => {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
