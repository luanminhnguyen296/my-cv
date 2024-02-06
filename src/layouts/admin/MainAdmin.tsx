import { selectAuthen, setToken } from '@/features/authentication/authenSlice'
import { auth } from '@/services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function MainAdmin() {

   const isLogin = useSelector(selectAuthen)
   const reduxDispatch = useDispatch()
   const navigate = useNavigate()

   useLayoutEffect(() => {
      console.log("🚀 ~ MainAdmin ~ isLogin:", isLogin)
      if (!isLogin) {
         onAuthStateChanged(auth, (user) => {
            if (user) {
               navigate('/admin', { replace: true })
               reduxDispatch(setToken(user.refreshToken))

            } else {
               navigate('/login')
            }
         })

      }
   }, [])
   useEffect(() => {
      console.log("🚀 ~ MainAdmin ~ isLogin:", isLogin)
   }, [isLogin])
   return (
      <>
         {
            isLogin && <div>
               <h2>Layout admin</h2>
               <Outlet />
            </div>
         }
      </>
   )
}

export default MainAdmin
