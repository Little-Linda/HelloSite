import React from "react";
import '../css/app.scss';
import '../css/header.scss';
import Clock from "./clock.js"

const worldName= "Tengri World!";

function Header() {
    return (
        <div className="header-wrapper text-center">
            <h1 className="text-center">{worldName}</h1>
            <h1>тут будет лого и картинка</h1>
            <div>Logo</div>
            <Clock />
        </div>
    );
}
export default Header;