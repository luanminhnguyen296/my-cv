import LoadingAuth from '@/components/LoadingAuth';
import { useAuth } from '@/hooks';
import { ReactNode, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export type props = {
   children: ReactNode,
   isAdmin?: boolean,
}
export default function CheckLogged({ isAdmin = true, children }: props) {

   const navigate = useNavigate()
   const { token, loading } = useAuth()

   useLayoutEffect(() => {

      if (!loading && token === null) {
         navigate('/login', { replace: true })
      } else if (!loading && token)
         navigate('/admin', { replace: true })

   }, [token])


   if (loading || token === undefined) {
      return <>
         <Helmet>
            <title>Nguyễn Minh Luân</title>
         </Helmet>
         <LoadingAuth />
      </>
   }

   if (!isAdmin && token)
      return null

   return (
      <>
         {children}
      </>
   )
}
