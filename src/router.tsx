
import React from 'react'
import { useRoutes } from 'react-router-dom'

// import Home from '@/pages/Home'
// import Styled from '@/pages/Styled'
// import About from '@/pages/About'


const Home = React.lazy(() => import('@/pages/Home'));
const About = React.lazy(() => import('@/pages/About'));
import NotFound from '@/pages/NotFound'



export default function RouteConfig() {
  return useRoutes([
    {
      path: "/",
      element:
        <React.Suspense fallback={<>...</>}>
          <Home />
        </React.Suspense>
    },
    {
      path: "/about",
      element:
        <React.Suspense fallback={<>...</>}>
          <About />
        </React.Suspense>
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);
}
