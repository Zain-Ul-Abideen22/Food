import React from "react";
import './Footer.css';
import { assets } from "../assets/assets";
import LoginPopup from "./LoginPopup";

const Footer = () =>{
    return(
        <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>Traditional food delivery services have long been a part of the food industry, with local restaurants and fast-food chains offering home delivery or takeout options</p>
            <div className="footer-social-icons">
                
                <img src= {assets.facebook_icon} alt=""/>
                <img src= {assets.linkedin_icon}  alt=""/>
                <img src= {assets.twitter_icon}  alt=""/>

            </div>    
            </div>

            <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                  </ul>

            </div>

            <div className="footer-content-right">
                 <h2>GET INTO TOUCH</h2>
                 <ul>
                    <li>+92-2222-77070</li>
                    <li>contact@tomato.com</li>
                 </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright"> copyright 2024 @ Tomato.com - All Right Reserved.</p>

        </div>
    )
}

export default Footer