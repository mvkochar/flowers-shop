import React from 'react'
import "./Home.css"
import ProductCart from '../components/ProductCart/ProductCart'

type HomeProps = {
  productId: number
  handleProductNum: (num: number) => void
  handleTotalPrice: (productPrice: number) => void 
}

const Home = ({ productId, handleProductNum, handleTotalPrice }: HomeProps) => {
  const [moreProducts, setMoreProducts] = React.useState(false)
  const [faqFirstDesc, setFaqFirstDesc] = React.useState(false)
  const [faqSecondDesc, setFaqSecondDesc] = React.useState(false)
  const [faqThirdDesc, setFaqThirdDesc] = React.useState(false)
  const [faqFourthDesc, setFaqFourthDesc] = React.useState(false)
  const [faqFifthDesc, setFaqFifthDesc] = React.useState(false)
  const [faqSixthDesc, setFaqSixthDesc] = React.useState(false)
  const [faqSeventhDesc, setFaqSeventhDesc] = React.useState(false)
  const [faqEighthDesc, setFaqEighthDesc] = React.useState(false)

  const handleMoreProducts = () => {
    setMoreProducts((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleFaqFirstDesc = () => {
    setFaqFirstDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleFaqSecondDesc = () => {
    setFaqSecondDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleFaqThirdDesc = () => {
    setFaqThirdDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleFaqFourthDesc = () => {
    setFaqFourthDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleFaqFifthDesc = () => {
    setFaqFifthDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleFaqSixthDesc = () => {
    setFaqSixthDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleFaqSeventhDesc = () => {
    setFaqSeventhDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleFaqEighthDesc = () => {
    setFaqEighthDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  return (
    <main>
      <section>
        <div className="flowers-main">
          <h2 className="flowers-main-title">Choose flowers for any occasion</h2>
          <div className="flowers-main-subtitle">Our goal is to provide the highest quality and fresh flower delivery in Los Angeles.</div>
          <button>View more</button>
        </div>
      </section>
      <section>
        <div className="flowers-delivery">
          <div className="flowers-delivery-box d-f">
            <div className="flowers-delivery-item d-f">
              <div>
                <div className="flowers-delivery-title">Need flowers delivered today?</div>
                <div className="flowers-delivery-subtitle">Call or chat us</div>
              </div>
              <div><img src="images/delivery.png" alt="delivery" /></div>
            </div>
            <div className="flowers-delivery-item d-f">
              <div>
                <div className="flowers-delivery-title">Free delivery within 4 miles</div>
                <div className="flowers-delivery-subtitle">No minimum order</div>
              </div>
              <div><img src="images/free-delivery.png" alt="free-delivery" /></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flowers-rated">
          <h3 className="flowers-rated-title">Top rated</h3>
          <div className="flowers-rated-box d-f">
            <ProductCart
              productId={0}
              image='images/product1.png'
              title='Cristal (pink carnations with mix flowers)'
              price={125}
              btnBgColor='#665F5F'
              btnName='Add to cart'
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={1}
              image='images/product2.png'
              title='Milana (bouquet with garden roses)'
              price={245}
              btnBgColor='#FFD1D7'
              btnName='Sold out'
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={2}
              image='images/product3.png'
              title='Diamond bouquet pink roses'
              price={200}
              btnBgColor='#665F5F'
              btnName='View options'
              isFrom={true}
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={3}
              image='images/product4.png'
              title='Bouquet Hyacinth pink'
              price={150}
              btnBgColor='#665F5F'
              btnName='Add to cart'
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={4}
              image='images/product5.png'
              title='Bouquet rose bush odilia'
              price={245}
              btnBgColor='#665F5F'
              btnName='View options'
              isFrom={true}
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={5}
              image='images/product6.png'
              title='Bouquet of delicate carnation rose'
              price={210}
              btnBgColor='#665F5F'
              btnName='View options'
              isFrom={true}
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
          </div>
          <div className={moreProducts ? "flowers-rated-box d-f" : "d-n"} >
            <ProductCart
              productId={0}
              image='images/product1.png'
              title='Cristal (pink carnations with mix flowers)'
              price={125}
              btnBgColor='#665F5F'
              btnName='Add to cart'
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={1}
              image='images/product2.png'
              title='Milana (bouquet with garden roses)'
              price={245}
              btnBgColor='#FFD1D7'
              btnName='Sold out'
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={2}
              image='images/product3.png'
              title='Diamond bouquet pink roses'
              price={200}
              btnBgColor='#665F5F'
              btnName='View options'
              isFrom={true}
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={3}
              image='images/product4.png'
              title='Bouquet Hyacinth pink'
              price={150}
              btnBgColor='#665F5F'
              btnName='Add to cart'
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={4}
              image='images/product5.png'
              title='Bouquet rose bush odilia'
              price={245}
              btnBgColor='#665F5F'
              btnName='View options'
              isFrom={true}
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
            <ProductCart
              productId={5}
              image='images/product6.png'
              title='Bouquet of delicate carnation rose'
              price={210}
              btnBgColor='#665F5F'
              btnName='View options'
              isFrom={true}
              handleProductNum={handleProductNum}
              handleTotalPrice={handleTotalPrice}
            />
          </div>
          <div className="flowers-rated-action">
            <button onClick={handleMoreProducts}> {moreProducts ? "Show less" : "Show more"} </button>
          </div>
        </div>
      </section>
      <section>
        <div className="flowers-collections">
          <h3 className="flowers-collections-title">Our collection</h3>
          <div className="flowers-collections-box d-f">
            <div className="flowers-collections-item">Birthday</div>
            <div className="flowers-collections-item">Wedding</div>
            <div className="flowers-collections-item">Anniversary</div>
            <div className="flowers-collections-item">New baby</div>
            <div className="flowers-collections-item">Luxury</div>
            <div className="flowers-collections-item">Graduation</div>
            <div className="flowers-collections-item">New Year</div>
            <div className="flowers-collections-item">Valentine's day</div>
            <div className="flowers-collections-item">Sympathy</div>
            <div className="flowers-collections-item">Love and romance</div>
            <div className="flowers-collections-item">Thank you</div>
            <div className="flowers-collections-item">Toys</div>
          </div>
        </div>
      </section>
      <section>
        <div className="flowers-choose">
          <h3 className="flowers-choose-title">Why choose us?</h3>
          <div className="flowers-choose-box d-f">
            <div className="flowers-choose-item">
              <div className="flowers-choose-caption d-f align-center">
                <h5>Extensive choice</h5>
                <div><img src="images/choose1.png" alt="choose1" /></div>
              </div>
              <p className="flowers-choose-desc">
                We have a huge selection of the most beautiful flowers in town. Our flower shop stocks all
                types of flowers, including roses, tulips, lilies, and more!
              </p>
            </div>
            <div className="flowers-choose-item">
              <div className="flowers-choose-caption d-f align-center">
                <h5>Fast delivery</h5>
                <div><img src="images/choose2.png" alt="choose2" /></div>
              </div>
              <p className="flowers-choose-desc">
                When it comes to delivering flowers as fast as possible, we don't mess around.
                We also provide next-day delivery from our store to your door.
              </p>
            </div>
            <div className="flowers-choose-item">
              <div className="flowers-choose-caption d-f align-center">
                <h5>Online ordering</h5>
                <div><img src="images/choose3.png" alt="choose3" /></div>
              </div>
              <p className="flowers-choose-desc">
                All you need to do is select the type and quantity of what you want online - we'll take care of the rest!
                Our team is online 24/7 with clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flowers-subscribe">
          <div className="flowers-subscribe-title">Subscribe to our emails</div>
          <div className="flowers-subscribe-subtitle">Be the first to know about new collections and exclusive offers.</div>
          <form action="" className='flowers-subscribe-fm d-f'>
            <input type="email" name='email' placeholder='Email' />
            <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
          </form>
        </div>
      </section>
      <section>
        <div className="flowers-faq">
          <h3 className="flowers-faq-title">Frequently asking questions</h3>
          <div className="flowers-faq-box d-f">
            <div className="flowers-faq-item">
              <div className="faq-item-caption d-f jc-sb">
                <div className="faq-item-title">Can I order same day flower delivery?</div>
                <button onClick={handleFaqFirstDesc}><img src="images/arrow-down.png" alt="arrow-down" /></button>
              </div>
              <p className={faqFirstDesc ? "faq-item-desc" : "d-n"}>
                Yes, you can place your order until 12pm to get it the same day, but if it's later than 12pm,
                you can just call us and we will try to rearrange our schedule and deliver it on the same day.
              </p>
            </div>
            <div className="flowers-faq-item">
              <div className="faq-item-caption d-f jc-sb">
                <div className="faq-item-title">Do you deliver on Sundays?</div>
                <button onClick={handleFaqSecondDesc}><img src="images/arrow-down.png" alt="arrow-down" /></button>
              </div>
              <p className={faqSecondDesc ? "faq-item-desc" : "d-n"}>
                Yes, we do. We deliver all Sunday long, you can order bouquets online for delivery or you can just
                call us and we will deliver your flowers to you.
              </p>
            </div>
            <div className="flowers-faq-item">
              <div className="faq-item-caption d-f jc-sb">
                <div className="faq-item-title">How much does flower delivery service cost?</div>
                <button onClick={handleFaqThirdDesc}><img src="images/arrow-down.png" alt="arrow-down" /></button>
              </div>
              <p className={faqThirdDesc ? "faq-item-desc" : "d-n"}>
                We deliver up to 4 miles for free, 4-8 miles - $15, 8-20 miles - $20, 20-30 miles - $30 and 30-50 miles - $50.
              </p>
            </div>
            <div className="flowers-faq-item">
              <div className="faq-item-caption d-f">
                <div className="faq-item-title">How long does it take to deliver flowers?</div>
                <button onClick={handleFaqFourthDesc}><img src="images/arrow-down.png" alt="arrow-down" /></button>
              </div>
              <p className={faqFourthDesc ? "faq-item-desc" : "d-n"}>
                Usually we deliver during the day, but when you order online, you could pick
                time slots - for example - from 8am to 12pm and we will deliver at the given time.
                Also, if you need bouquets delivered at an exact time, just call us at +214 772 56 74
                and we will try to do our best to deliver them to you at the time of your choosing.
              </p>
            </div>
            <div className="flowers-faq-item">
              <div className="faq-item-caption d-f jc-sb">
                <div className="faq-item-title">Can I pick up flowers from the shop?</div>
                <button onClick={handleFaqFifthDesc}><img src="images/arrow-down.png" alt="arrow-down" /></button>
              </div>
              <p className={faqFifthDesc ? "faq-item-desc" : "d-n"}>
                Yes, sure! You are always welcome at our shop but if you live near our location remember, you can order
                flowers with free shipping.
              </p>
            </div>
            <div className="flowers-faq-item">
              <div className="faq-item-caption d-f jc-sb">
                <div className="faq-item-title">Can I order flower delivery for tomorrow?</div>
                <button onClick={handleFaqSixthDesc}><img src="images/arrow-down.png" alt="arrow-down" /></button>
              </div>
              <p className={faqSixthDesc ? "faq-item-desc" : "d-n"}>
                Yes, you can place your order online until midnight or call our shop until 6pm to place your order
                and get your delivery on the next day.
              </p>
            </div>
            <div className="flowers-faq-item">
              <div className="faq-item-caption d-f jc-sb">
                <div className="faq-item-title">Where do you deliver flowers?</div>
                <button onClick={handleFaqSeventhDesc}><img src="images/arrow-down.png" alt="arrow-down" /></button>
              </div>
              <p className={faqSeventhDesc ? "faq-item-desc" : "d-n"}>
                We deliver to West Hollywood, North Hollywood, Beverly Hills, Santa Monica, Pasadena,
                Encino, Bel Air, Brentwood, Sherman Oaks, Manhattan Beach, El Segundo, Marina del Rey,
                Culver City, Koreatown, Downtown LA, Palms, Van Nuys, Glendale, Studio City, Venice,
                Pacific Palisades and Malibu.
              </p>
            </div>
            <div className="flowers-faq-item">
              <div className="faq-item-caption d-f jc-sb">
                <div className="faq-item-title">Can I create my own bouquet?</div>
                <button onClick={handleFaqEighthDesc}><img src="images/arrow-down.png" alt="arrow-down" /></button>
              </div>
              <p className={faqEighthDesc ? "faq-item-desc" : "d-n"}>
                Yes, we have so many fresh arrangements every day, you are more than welcome to come,
                pick the flowers you like and we will make a bouquet or flower arrangement from them for you.
                You can always visit our flower workshop and enjoy the feeling atmosphere of making a flower
                arrangement with florists step by step.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flowers-follow">
          <h3 className="flowers-follow-title">Follow us on Instagram</h3>
          <div className="flowers-follow-subtitle">@CHERRYBLOSSOM.LA</div>
          <div className="flowers-follow-img"><img src="images/follow.png" alt="follow" /></div>
        </div>
      </section>
      <section>
        <div className="flowers-blogs">
          <h3 className="flowers-blogs-title">Our blogs</h3>
          <div className="flowers-blogs-box d-f align-center">
            <button><img src="images/arrow-left.png" alt="arrow-left" /></button>
            <div className="flowers-blogs-content d-f">
              <div className="flowers-blogs-item">
                <div style={{ margin: "-5px" }}><img src="images/blogs1.png" alt="blogs" /></div>
                <div className="blogs-item-title">In amet, mollis </div>
                <p className="blogs-item-desc">
                  Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut.
                  Eget mattis pellentesque mattis dolor adipiscing accumsan elit.
                  Non libero, libero, amet tortor, velit ex.
                </p>
              </div>
              <div className="flowers-blogs-item">
                <div style={{ margin: "-5px" }}><img src="images/blogs2.png" alt="blogs2" /></div>
                <div className="blogs-item-title">In amet, mollis </div>
                <p className="blogs-item-desc">
                  Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut.
                  Eget mattis pellentesque mattis dolor adipiscing accumsan elit.
                  Non libero, libero, amet tortor, velit ex.
                </p>
              </div>
              <div className="flowers-blogs-item">
                <div style={{ margin: "-5px", marginBottom: "24px" }}><img src="images/blogs3.png" alt="blogs3" /></div>
                <div className="blogs-item-title">In amet, mollis </div>
                <p className="blogs-item-desc">
                  Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut.
                  Eget mattis pellentesque mattis dolor adipiscing accumsan elit.
                  Non libero, libero, amet tortor, velit ex.
                </p>
              </div>
            </div>
            <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
          </div>
        </div>
      </section>
      <section>
        <div className="flowers-location">
          <div className="flowers-location-content">
            <div><img src="images/location.png" alt="location" /></div>
            <div className="flowers-location-title">Cherry Blossom Address</div>
            <p className="flowers-location-info">6201 Hollywood blvd <br /> Los Angeles, California 90028</p>
            <p className="flowers-location-info">Monday - Friday 9:00 am - 8:00 pm Saturday 10:00 am - 5:00 pm Sunday 10:00 am - 5:00 pm</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home