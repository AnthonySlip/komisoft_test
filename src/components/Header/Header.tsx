import React from 'react';
import {nav} from "../Nav.ts";
import {Link} from "react-router-dom";
import './Header.scss';
import Cart from "./Cart.tsx";
const Header: React.FC = () => {

    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__body">
                    <h2 className="header__logo">Komisoft</h2>
                    <nav className="header__nav">
                        {nav.map((item, index) => (<Link key={index} to={item.link}>
                            <p className="header__link">{item.title}</p>
                        </Link>))}
                    </nav>
                    <Cart/>
                </div>
            </div>
        </header>
    );
}

export default Header;