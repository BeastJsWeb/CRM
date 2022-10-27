import {Routes, Route} from 'react-router-dom'

import { PageContainer } from "../layouts/pageContainer"
import { Homepage } from "../../pages/homepage"
import { Address } from '../../pages/address'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageContainer />} >
        <Route index element={<Homepage />} />
        <Route path="address" element={<Address />} />
      </Route>
    </Routes>
  )
}