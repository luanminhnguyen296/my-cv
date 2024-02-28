
import { AdminLayout, AuthLayout, MainLayout } from "@/layouts";
import { LoadingMain, Login, NotFound } from "@/pages";
import { sleep } from "@/utils/helper";
import { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export type Tlayout = 'main' | 'authentication'

export type TRoute = {
  path: string,
  title: string,
  component: FC,
  layout?: FC
}

const routesClient: TRoute[] = [
  {
    path: '/',
    title: 'Home',
    component: lazy(async () => {
      // await sleep(4500);
      return import('@/pages/home/Home')
    }),
  },
  {
    path: '/login',
    title: 'Login',
    component: Login,
    layout: AuthLayout
  }
]

const routesAdmin: TRoute[] = [
  {
    path: '/admin',
    title: 'Dashboard',
    component: lazy(async () => import('@/pages/admin/Dashboard')),
    layout: AdminLayout
  },
]


function renderRoutes(route: TRoute) {
  const LayoutPage = route?.layout || MainLayout
  return (
    <Route element={<LayoutPage />} key={route.path}>
      <Route key={route.path} path={route.path} element={<route.component />} />
    </Route>

  )
}


export default function RoutesProvider() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingMain />}>
        <Routes>
          <Route errorElement={<NotFound />}>
            <Route element={<MainLayout />}>
              <Route key='*' path='*' element={<NotFound />} />
            </Route>
            {routesClient.map(renderRoutes)}
            {routesAdmin.map(renderRoutes)}
          </Route >
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
