import React from 'react'
import './About.css'

const About = () => {
    return (
        <main>
            <section><h2 className="about-title">About us</h2></section>
            <section><div className="about-img"><img src="images/about.png" alt="about" /></div></section>
            <section>
                <div className="about-main">
                    <p className="about-main-desc">
                        On the other hand, we denounce with righteous indignation and dislike men who are so
                        beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
                        that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
                        belongs to those who fail in their duty through weakness of will, which is the same as
                        saying through shrinking from toil and pain. These cases are perfectly simple and easy
                        to distinguish. In a free hour, when our power of choice is untrammelled and when nothing
                        prevents our being able to do what we like best, every pleasure is to be welcomed and every
                        pain avoided. But in certain circumstances and owing to the claims of duty or the obligations
                        of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.
                        The wise man therefore always holds in these matters to this principle of selection: he rejects
                        pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                    </p>
                    <p className="about-main-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>
            <section>
                <div className="flowers-blogs" style={{marginTop: "52.95px"}}>
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
                <div className="flowers-subscribe" style={{marginTop: "61.43px"}}>
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

export default About