import './Navbar.css';
import logo from '../Assets/logo.png';
import cartIcon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState('');
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className='navbar__logo'>
                <img src={logo} alt="logo" />
                <p>SHOPFY</p>
                </div>
                <ul className="navbar__menu">
                    <Link to='/shop' onClick={() => setMenu('Shop')} className="navbar__item">
                        Shop{menu === 'Shop' && <hr/>}
                    </Link>
                    <Link to='/men' onClick={() => setMenu('Men')} className="navbar__item">
                        Men{menu === 'Men' && <hr/>}
                    </Link>
                    <Link to='/women' onClick={() => setMenu('Women')} className="navbar__item">
                        Women{menu === 'Women' && <hr/>}
                    </Link>
                    <Link to='/kids' onClick={() => setMenu('Kids')} className="navbar__item">
                        Kids{menu === 'Kids' && <hr/>}
                    </Link>
                </ul>
                <div className="navbar_login_cart">
                    <button className="navbar__login">Login</button>
                    <img src={cartIcon} className="navbar__cart"/>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;