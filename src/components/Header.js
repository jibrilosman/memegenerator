
import React from "react";
import Logo from "../images/Troll-Face.png";

export default function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="header-img"/>
            <h3 className="header-title">Meme Generator</h3>
            <h4 className="header-project">React Course - Project 3</h4>
        </div>
    )
}

// <div className="header-logo">
//                 <img src="../images/troll-face.png" alt="logo" className="logo-img"/>
//                 <h2>Meme Generator</h2>
//             </div>
//             <h3>React Course - Project 3</h3>