import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, SearchPage } from './pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='search' element={<SearchPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
