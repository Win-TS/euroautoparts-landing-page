import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)