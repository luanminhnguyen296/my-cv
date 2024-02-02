// import { App } from '@/App';
// import MainLayout from '@/layouts/Main';
import About from '@/pages/about';
import NotFound from '@/pages/error/NotFound';
import type { Router } from "@remix-run/router";
import { Suspense } from 'react';
import AuthenticationLayout from "@/layouts/Authentication";
import MainLayout from "@/layouts/Main";
import Contact from "@/pages/contact/Contact";
import Login from "@/pages/login/index.tsx";
import Register from "@/pages/register";
import Resume from "@/pages/resume";
import { FC } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export type Tlayout = 'main' | 'authentication'

export type TRoute = {
  path: string,
  title: string,
  component: FC,
  layout?: FC
}


const routes: TRoute[] = [
  {
    path: '/',
    title: 'About',
    component: About,
  },
  {
    path: 'resume',
    title: 'Resume',
    component: Resume,
  },
  {
    path: 'contact',
    title: 'Contact',
    component: Contact,
  },
  {
    path: 'register',
    title: 'Register',
    component: Register,
    layout: AuthenticationLayout
  },
  {
    path: 'login',
    title: 'Login',
    component: Login,
    layout: AuthenticationLayout
  }
]


function renderRoutes(route: TRoute) {
  const LayoutPage = route?.layout || MainLayout
  return (
    <Route element={<LayoutPage />} key={route.path}>
      <Route key={route.path} path={route.path} element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <route.component />
        </Suspense>} />
    </Route>

  )
}

const router: Router = createBrowserRouter(createRoutesFromElements(
  [
    <Route errorElement={<NotFound />}>
      <Route element={<MainLayout />}>
        <Route key='*' path='*' element={<NotFound />} />
      </Route>
      {routes.map(renderRoutes)}
    </Route>
  ]
), { basename: import.meta.env.MODE === 'development' ? '' : '' })



export { router };

