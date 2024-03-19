import React, { Suspense } from "react";

function Lazy(Element: React.LazyExoticComponent<() => JSX.Element>) {
  return (
    <Suspense >
      <Element />
    </Suspense>
  )
}
interface Route {
  path: string,
  element: JSX.Element,
  handle: string,
  auth: boolean
}
const routes: Route[] = [
  {
    path: '/home',
    element: Lazy(React.lazy(() => import('@/view/home'))),
    handle: 'home',
    auth: true
  },
  {
    path: '/map',
    element: Lazy(React.lazy(() => import('@/view/map'))),
    handle: 'map',
    auth: true
  },
  {
    path: '/dataView',
    element: Lazy(React.lazy(() => import('@/view/data'))),
    handle: 'dataView',
    auth: true
  }
]

export {
  routes
}