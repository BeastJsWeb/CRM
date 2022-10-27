import React, {useState} from 'react';
import { PublicRoutes } from './components/routes/publicRoutes';
import { sidebarContext } from './utils/context';

const App = () => {
  const [isNav, setIsNav] = useState(false)

  const hanlde = () => setIsNav(!isNav)

  return (
    <sidebarContext.Provider value={{isNav, hanlde}} >
      <PublicRoutes />
    </sidebarContext.Provider>
  )
}

export default App
