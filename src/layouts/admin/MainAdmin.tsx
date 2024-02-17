import CheckLogged from '@/components/Authentication/CheckLogged'
import { Outlet } from 'react-router-dom'

function MainAdmin() {

   return (
      <CheckLogged>
         <h2>Layout admin</h2>
         <Outlet />
      </CheckLogged>
   )
}

export default MainAdmin
