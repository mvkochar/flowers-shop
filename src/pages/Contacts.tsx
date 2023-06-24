import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <main>
            <section>
                <h2 className="contacts-title">Contacts</h2>
            </section>
            <section>
                <div className="flowers-location">
                    <div className="flowers-location-content">
                        <div><img src="images/location.png" alt="location" /></div>
                        <div className="flowers-location-title">Cherry Blossom Address</div>
                        <p className="flowers-location-info">6201 Hollywood blvd <br /> Los Angeles, California 90028</p>
                        <p className="flowers-location-info">
                            Monday - Friday 9:00 am - 8:00 pm Saturday 10:00 am - 5:00 pm Sunday 10:00 am - 5:00 pm
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="contacts-get">
                    <h3 className="contacts-get-title">How to get us</h3>
                    <div className="contacts-get-video"><img src="images/contacts-get.png" alt="contacts-get" /></div>
                </div>
            </section>
            <section>
                <div className="contacts-write">
                    <h2 className="contacts-write-title">Write to us</h2>
                    <form action="" className="contacts-write-fm d-f">
                        <input type="text" name="customerName" placeholder='Name' />
                        <input type="email" name="email" placeholder='E-mail' />
                        <input type="tel" name="phone" placeholder='Phone number' />
                        <textarea name="message" placeholder='Enter your text' ></textarea>
                    </form>
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
        </main>
    )
}

export default Contacts