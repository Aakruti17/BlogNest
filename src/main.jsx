import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogPage from './pages/BlogPage.jsx';

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/:name", element:<BlogPage/>}
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
