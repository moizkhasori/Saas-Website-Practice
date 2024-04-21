import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="header-footer-wrapper">
        <div className="footer-wrapper">

            <div className="footer-left">
                <h3>Wallet</h3>
                <div className="footer-left-p">
                   <p>&copy; Wallet 2024</p>
                   <p>Privacy policy</p>
                   <p>Cookies policy</p>
                   <p>Terms of use</p>
                   
                </div>
            </div>
            <div className="footer-right">
                <p>Updates right to your inbox</p>
                <div className="footer-right-content">
                    <input type="email" placeholder="Email Address" />
                    <button>send</button>
                </div>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
