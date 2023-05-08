import React, { useRef } from "react";
import './Join.css'

const Join = () => {
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr></hr>
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form className="email-container">
                    <input type="email" name="user_email" placeholder="Enter your email address"></input>
                    <button className="btn btn-j">Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join