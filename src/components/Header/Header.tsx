import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

type HeaderProps = {
    totalPrice: number
}

const Header = ({totalPrice}: HeaderProps) => {
    return (
        <div className='header d-f jc-sb align-center'>
            <nav>
                <ul className="header-nav-list d-f">
                    <li><Link to="search">Search</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About us</Link></li>
                    <li><Link to="catalog">Catalog</Link></li>
                    <li><Link to="collections">Collections</Link></li>
                    <li><Link to="contacts">Contacts</Link></li>
                </ul>
            </nav>
            <div className='header-logo'><img src="images/logo.svg" alt="logo" /></div>
            <div className="header-actions d-f align-center">
                <button><img src="images/search.png" alt="search" /></button>
                <div className="header-actions-buy d-f">
                    <div><img src="images/buy.png" alt="buy" /></div>
                    <h6>{totalPrice}$</h6>
                </div>
            </div>
        </div>
    )
}

export default Header