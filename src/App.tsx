import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, SearchPage, UnkownPage } from './pages'
import { Header } from './components'

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='search/:query' element={<SearchPage />} />
        <Route path='*' element={<UnkownPage />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App
