import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './components/landingpage/Landing';
import Homepage from './components/Homepage/Homepage';
import About from './components/about/About';
import Work from './components/work/Work';
import Admin from './components/admin/Admin';
import Admincart from './components/admincart/Admincart';
import Blogs from './components/Blogs/Blogs';
import Addblogs from './components/add things/Addblogs';
import Addwork from './components/add things/Addwork';
import Showwork from './components/navwork/Showwork';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Showblog from './components/showblogs/Showblog';
import Separateblog from './components/separateblog/Separateblog';
import Contact from './components/contact/Contact';
import Separatework from './components/separatework/Separatework';
import Clientinfo from './components/Client/Clientinfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing></Landing>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/work",
        element: <Showwork></Showwork>
      },
      {
        path: "/blog",
        element: <Showblog></Showblog>
      },
      {
        path: "/separateblog/:id",
        element: <Separateblog></Separateblog>,
        loader : ({params}) => fetch(`https://portfolioserver-phi.vercel.app/separateblog/${params.id}`)
      },
      {
        path: "/separatework/:id",
        element: <Separatework></Separatework>,
        loader : ({params}) => fetch(`https://portfolioserver-phi.vercel.app/separatework/${params.id}`)
      },
      {
        path: "/hireme",
        element: <Contact></Contact>
      }
    ]

  },
  {
    path: "/admin",
    element: <Admin></Admin>,
    children: [
      {
        path: "/admin",
        element: <div>Admin Panel</div>
      },
      {
        path: "/admin/admincart",
        element: <Admincart></Admincart>
      },
      {
        path: "/admin/work",
        element: <Work></Work>
      },
      {
        path: "/admin/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/admin/addblogs",
        element: <Addblogs></Addblogs>
      },
      {
        path: "/admin/addwork",
        element: <Addwork></Addwork>
      },
      {
        path: "/admin/clientinfo",
        element: <Clientinfo></Clientinfo>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
