import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo_small.png';
import cart_icon from '../Assets/cart_icon_2.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import drop_down from '../Assets/drop_down.png';

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const { getTotalCartItem } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to="/" className='nav-link'>
                    <img src={logo} alt='' className='logo-img' />
                    <p>E-com store</p>
                </Link>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_down} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li className='visible' onClick={() => { setMenu("home") }}><Link className='link' to="/">Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li className='visible' onClick={() => { setMenu("mens") }}><Link className='link' to='/mens'>Men's</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li className='visible' onClick={() => { setMenu("womens") }}><Link className='link' to='/womens'>Women's</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li className='visible' onClick={() => { setMenu("kids") }}><Link className='link' to='/kids'>Kid's</Link>{menu === "kids" ? <hr /> : <></>}</li>
                <li className='not-visible' onClick={() => { setMenu("abouts") }}><Link className='link' to='/about'>About Us</Link>{menu === "abouts" ? <hr /> : <></>}</li>
                <li className='not-visible' onClick={() => { setMenu("contacts") }}><Link className='link' to='/contact'>Contact</Link>{menu === "contacts" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token') ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> : <Link className='link' to='/login'><button>Login</button></Link>}
                <Link className='link' to='/cart'><div className='cart_logo'><img src={cart_icon} alt='' /></div></Link>
                <div className='nav-cart-count'>{getTotalCartItem()}</div>
            </div>
        </div>
    )
}

export default Navbar