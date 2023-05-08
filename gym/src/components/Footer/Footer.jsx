import React from "react";
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr></hr>
            <div className="footer">
                <div className="social-links">
                    <img src={Github}></img>
                    <img src={Instagram}></img>
                    <img src={LinkedIn}></img>
                </div>
                <div className="logo-f">
                    <img src={Logo}></img>
                </div>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer