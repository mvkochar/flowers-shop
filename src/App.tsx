import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
  const [productNum, setProductNum ] = React.useState(-1)
  const [totalPrice, setTotalPrice] = React.useState(0)
  
  const handleProductNum = (num: number)=> {
    setProductNum(num)
  }

  const handleTotalPrice = (productPrice: number) => {
    setTotalPrice((prevState) => {
      return (
        prevState + productPrice
      )
    })
  }

  return (
    <>
      <Header totalPrice={totalPrice}/>
      <Main productId={productNum} handleProductNum={handleProductNum} handleTotalPrice={handleTotalPrice}/>
      <Footer/>
    </>
  )
}

export default App