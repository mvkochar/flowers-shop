import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Catalog from '../../pages/Catalog'
import Collections from '../../pages/Collections'
import Contacts from '../../pages/Contacts'
import Search from '../../pages/Search'

type MainProps = {
  productId: number
  handleProductNum: (num: number) => void
  handleTotalPrice: (productPrice: number) => void 
} 

const Main = ({productId, handleProductNum, handleTotalPrice}: MainProps) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home productId={productId} handleProductNum={handleProductNum} handleTotalPrice={handleTotalPrice} />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='catalog'
        element={<Catalog productId={productId} handleProductNum={handleProductNum} handleTotalPrice={handleTotalPrice}/>}
      />
      <Route
        path='collections'
        element={<Collections/>}
      />
      <Route
        path='contacts'
        element={<Contacts/>}
      />
      <Route
        path='search'
        element={<Search/>}
      />
    </Routes>
  )
}

export default Main