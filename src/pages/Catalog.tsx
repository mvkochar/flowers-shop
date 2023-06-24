import React from 'react'
import './Catalog.css'
import ProductCart from '../components/ProductCart/ProductCart'
import SingleProduct from '../components/SingleProduct/SingleProduct'

type CatalogProps = {
    productId: number
    handleProductNum: (num: number) => void
    handleTotalPrice: (productPrice: number) => void 
}

const Catalog = ({ productId, handleProductNum, handleTotalPrice }: CatalogProps) => {
    const [moreProducts, setMoreProducts] = React.useState(false)

    const handleMoreProducts = () => {
        setMoreProducts((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>

            {productId === -1 ?
                <>
                    <section><h2 className="catalog-title">Catalog</h2></section>
                    <section>
                        <div className="catalog-action d-f">
                            <div className='catalog-action-caption'>Sort by: Best selling</div>
                            <div>
                                <button><img src="images/arrow-down2.png" alt="arrow-down2" /></button>
                            </div>
                            <div className='catalog-action-products'>517 products</div>
                        </div>
                    </section>
                    <section>
                        <div className="catalog-box d-f">
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
                        <div className={moreProducts ? "catalog-box d-f" : "d-n"}>
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
                        <div className='catalog-box-info'> 1 - {moreProducts ? "18" : "9"} of 517 products</div>
                        <button className='catalog-box-btn' onClick={handleMoreProducts}> {moreProducts ? "Show less" : "Load more"}</button>
                    </section>
                </>
                :
                <SingleProduct productId={productId} handleProductNum={handleProductNum} handleTotalPrice={handleTotalPrice} />

            }
        </main>
    )
}

export default Catalog