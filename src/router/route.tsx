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
  handle: string
}
const routes: Route[] = [
  {
    path: '/home',
    element: Lazy(React.lazy(() => import('@/view/home'))),
    handle: 'home'
  },
  {
    path: '/map',
    element: Lazy(React.lazy(() => import('@/view/map'))),
    handle: 'map'
  }
]

export {
  routes
}