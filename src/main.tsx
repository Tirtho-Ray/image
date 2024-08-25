import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import img from './assets/blue.png'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div
      
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
    >
      <RouterProvider router={router} />
    </div>
  </StrictMode>
)
