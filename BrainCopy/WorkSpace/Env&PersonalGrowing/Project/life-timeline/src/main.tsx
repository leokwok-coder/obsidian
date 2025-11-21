

/*
 * @Author      : babybus
 * @Date        : 2025-10-11 17:16:03
 * @LastEditors : guobiao
 * @LastEditTime: 2025-10-11 17:54:31
 * @FilePath    : main.tsx
 * @Description : 
 * 
 * Copyright (c) 2011-2025  baby-bus.com. 
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './components/layout/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
