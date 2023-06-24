import React from 'react'
import { ProductsArr } from '../ProductsArr/ProductsArr'
import './SingleProduct.css'
import ProductCart from '../ProductCart/ProductCart'

type SingleProductProps = {
    productId: number,
    handleProductNum: (num: number) => void
    handleTotalPrice: (productPrice: number) => void 
}

const SingleProduct = ({ productId, handleProductNum, handleTotalPrice }: SingleProductProps) => {
    const [quantity, setQuantity] = React.useState(1);
    const [alsoPage, setAlsoPage] = React.useState(1);

    const decrementQuantity = () => {
        setQuantity((prevState) => {
            return (
                prevState > 1 ? prevState - 1 : prevState
            )
        })
    }

    const incrementQuantity = () => {
        setQuantity((prevState) => {
            return (
                prevState + 1
            )
        })
    }

    const decrementAlsoPage = () => {
        setAlsoPage((prevState) => {
            return (
                prevState > 1 ? prevState - 1 : prevState
            )
        })
    }

    const incrementAlsoPage = () => {
        setAlsoPage((prevState) => {
            return (
                prevState < 3 ? prevState + 1 : prevState
            )
        })
    }

    return (
        <div className='single-product'>
            <div className="single-product-main d-f">
                <div className='product-main-caption d-f align-center'>
                    <button className='action-btn'><img src="images/arrow-left.png" alt="arrow-left" /></button>
                    <div><img src={ProductsArr[productId].image} alt="product-img" /></div>
                    <button className='action-btn'><img src="images/arrow-right2.png" alt="arrow-right" /></button>
                </div>
                <div>
                    <div className="product-main-title">{ProductsArr[productId].title}</div>
                    <div className="product-main-price">${ProductsArr[productId].currentPrice}</div>
                    <div className="product-main-shipping">Shipping calculated at checkout</div>
                    <div className="product-main-action d-f">
                        <div className='product-main-quantity'>
                            <div className="main-quantity-title">Quantity</div>
                            <div className="main-quantity-content d-f align-center">
                                <button onClick={decrementQuantity}>-</button>
                                <h5>{quantity}</h5>
                                <button onClick={incrementQuantity}>+</button>
                            </div>
                        </div>
                        <button>Add do cart</button>
                    </div>
                    <div className="product-main-info">Pickup available at <span>Hollywood blvd</span> <br />Usually ready in tomorrow</div>
                </div>
            </div>
            <div className="single-product-also">
                <h3 className="single-product-title">You may also</h3>
                <div className="product-also-box d-f align-center">
                    <button className='action-btn' onClick={decrementAlsoPage}><img src="images/arrow-left.png" alt="arrow-left" /></button>
                    <div className={alsoPage === 1 ? "product-also-content d-f" : "d-n"}>
                        <ProductCart
                            productId={0}
                            image='images/catalog/product1.png'
                            title='45 red roses'
                            price={150}
                            btnBgColor='#665F5F'
                            btnName='Add to cart'
                            handleProductNum={handleProductNum}
                            handleTotalPrice={handleTotalPrice}
                        />
                        <ProductCart
                            productId={1}
                            image='images/catalog/product2.png'
                            title='Annet (white dahlias)'
                            price={245}
                            btnBgColor='#FFD1D7'
                            btnName='Sold out'
                            handleProductNum={handleProductNum}
                            handleTotalPrice={handleTotalPrice}
                        />
                        <ProductCart
                            productId={2}
                            image='images/catalog/product3.png'
                            title='Garden roses in a bouquets'
                            price={120}
                            btnBgColor='#665F5F'
                            btnName='View options'
                            isFrom={true}
                            handleProductNum={handleProductNum}
                            handleTotalPrice={handleTotalPrice}
                        />
                    </div>
                    <div className={alsoPage === 2 ? "product-also-content d-f" : "d-n"}>
                        <ProductCart
                            productId = {3} 
                            image='images/catalog/product4.png'
                            title='Cristal (pink carnations with mix flowers)'
                            price={375}
                            isSale={true}
                            currentPrice={225}
                            sale={40}
                            btnBgColor='#665F5F'
                            btnName='Add to cart'
                            handleProductNum={handleProductNum}
                            handleTotalPrice={handleTotalPrice}
                        />
                        <ProductCart
                            productId={4}
                            image='images/catalog/product5.png'
                            title='Milana (bouquet with garden roses)'
                            price={305}
                            isSale={true}
                            currentPrice={270}
                            sale={25}
                            btnBgColor='#FFD1D7'
                            btnName='Sold out'
                            handleProductNum={handleProductNum}
                            handleTotalPrice={handleTotalPrice}
                        />
                        <ProductCart
                            productId={5}
                            image='images/catalog/product6.png'
                            title='Diamond bouquet pink roses'
                            price={305}
                            isSale={true}
                            currentPrice={150}
                            sale={50}
                            btnBgColor='#665F5F'
                            btnName='View options'
                            handleProductNum={handleProductNum}
                            handleTotalPrice={handleTotalPrice}
                        />
                    </div>
                    <div className={alsoPage === 3 ? "product-also-content d-f" : "d-n"}>
                        <ProductCart
                            productId={6}
                            image='images/catalog/product7.png'
                            title='45 red roses'
                            price={150}
                            btnBgColor='#665F5F'
                            btnName='Add to cart'
                            handleProductNum={handleProductNum}
                            handleTotalPrice={handleTotalPrice}
                        />
                        <ProductCart
                            productId={7}
                            image='images/catalog/product8.png'
                            title='Annet (white dahlias)'
                            price={245}
                            btnBgColor='#665F5F'
                            btnName='Add to cart'
                            handleProductNum={handleProductNum}
                            handleTotalPrice={handleTotalPrice}
                        />
                        <ProductCart
                            productId={8}
                            image='images/catalog/product9.png'
                            title='Garden roses in a bouquets'
                            price={120}
                            btnBgColor='#665F5F'
                            btnName='Add to cart'
                            isFrom={true}
                            handleProductNum={handleProductNum}
                            handleTotalPrice={handleTotalPrice}
                        />
                    </div>
                    <button className='action-btn' onClick={incrementAlsoPage}>
                        <img src="images/arrow-right2.png" alt="arrow-right" />
                    </button>
                </div>
            </div>
            <div className="single-product-recently">
                <div className="single-product-title">Recently viewed products</div>
                <div className="product-recently-box d-f">
                    <ProductCart
                        productId={3}
                        image='images/catalog/product4.png'
                        title='Cristal (pink carnations with mix flowers)'
                        price={375}
                        isSale={true}
                        currentPrice={225}
                        sale={40}
                        btnBgColor='#665F5F'
                        btnName='Add to cart'
                        handleProductNum={handleProductNum}
                        handleTotalPrice={handleTotalPrice}
                    />
                </div>
            </div>
        </div>
       
    )
}

export default SingleProduct