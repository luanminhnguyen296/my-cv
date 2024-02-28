
import AuthenticationLayout from "@/layouts/Authentication";
import MainAdmin from '@/layouts/admin/MainAdmin';
import MainLayout from "@/layouts/client/Main";
import NotFound from '@/pages/error/NotFound';
import Login from "@/pages/login/index.tsx";
import type { Router } from "@remix-run/router";
import { FC, Suspense, lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from '../pages/admin/Dashboard';
import { sleep } from "@/utils/helper";
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
    title: 'About',
    component: lazy(async () => {
      // await sleep();
      // return import('@/pages/home/Home')
    }),
  },
  {
    path: 'login',
    title: 'Login',
    component: Login,
    layout: AuthenticationLayout
  }
]

const routesAdmin: TRoute[] = [
  {
    path: '/admin',
    title: 'Dashboard',
    component: Dashboard,
    layout: MainAdmin
  },
]


function renderRoutes(route: TRoute) {
  const LayoutPage = route?.layout || MainLayout
  return (
    <Route element={<LayoutPage />} key={route.path}>
      <Route key={route.path} path={route.path} element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <route.component />
        </Suspense>
      } />
    </Route>

  )
}

const router: Router = createBrowserRouter(createRoutesFromElements(
  [

    <Route errorElement={<NotFound />}>
      <Route element={<MainLayout />}>
        <Route key='*' path='*' element={<NotFound />} />
      </Route>
      {routesClient.map(renderRoutes)}
      {routesAdmin.map(renderRoutes)}
    </Route >
  ]
), { basename: import.meta.env.MODE === 'development' ? '' : '' })



export { router };

