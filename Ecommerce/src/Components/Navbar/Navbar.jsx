import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu('shop') }}><Link to='/'>Shop</Link>{menu === 'shop' ? <hr className='focused_hr'/> : <hr className='not_focused_hr'/>}</li>
        <li onClick={() => { setMenu('men') }}><Link to='/men'>Men</Link>{menu === 'men' ? <hr className='focused_hr' /> : <hr className='not_focused_hr'/>}</li>
        <li onClick={() => { setMenu('women') }}><Link to='/women'>Women</Link>{menu === 'women' ? <hr className='focused_hr' /> : <hr className='not_focused_hr'/>}</li>
        <li onClick={() => { setMenu('kids') }}><Link to='/kids'>Kids</Link>{menu === 'kids' ? <hr className='focused_hr'/> : <hr className='not_focused_hr'/>}</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <Link to='/cart' ><img src={cart_icon} alt='' /></Link>
      </div>
    </div>
  )
}
