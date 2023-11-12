// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'

export const DefineRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
  )
}
