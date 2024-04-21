import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className="header-footer-wrapper">
            <div className="nav-logo">
                <h3>Wallet</h3>
            </div>
            <div className="nav-buttons">
                {["Sign up", "Log in"].map((item,i) => (
                    item === "Sign up" 
                    ? <button className='nav-signup-button' key={i}>{item}</button>
                    : <button className='nav-login-button' key={i}>{item}</button>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default Navbar