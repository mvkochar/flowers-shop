import React from 'react'
import "./ProductCart.css"

type ProductCartProps = {
    productId: number
    image: string
    title: string
    price: number
    btnBgColor: string
    btnName: string
    isSale?: boolean
    sale?: number
    currentPrice?: number
    isFrom?: boolean
    handleProductNum: (num: number) => void
    handleTotalPrice: (productPrice: number) => void 
}

const ProductCart = ({ productId, image, title, price, 
    btnBgColor, btnName, isSale = false, sale, currentPrice = 0, isFrom = false, handleProductNum, handleTotalPrice }: ProductCartProps) => {
      
        const handleProduct = () => {
           const p =  isSale ? currentPrice : price

            if(btnName === "Add to cart") {
                handleTotalPrice(p)
            }
        }

    return (
        <div className='product-cart'>
            <div className="product-cart-main" style={{background: `url('${image}')`}} onClick={()=>handleProductNum(productId)} >
                <div className={isSale ? "product-cart-sale" : "d-n"}>On sale</div>
            </div>
            <div className="product-cart-about d-f align-center">
                <div>
                    <div className="product-cart-title">{title}</div>
                    <div className={isSale ? "product-cart-price old-price" : "d-n"}><span>${price}</span> <span>-{sale}%</span> </div>
                    <div className="product-cart-price">{isFrom ? "From": ""}  ${isSale ? currentPrice : price}</div>
                </div>
                <button style={{backgroundColor: btnBgColor,  border: `1px solid ${btnBgColor}`}} onClick={handleProduct}>{btnName}</button>
            </div>            
        </div>

    )
}

export default ProductCart