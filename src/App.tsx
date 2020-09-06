import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, SearchPage, UnkownPage } from './pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='search' element={<SearchPage />} />
      <Route path='*' element={<UnkownPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
