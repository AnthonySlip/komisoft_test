import React from 'react';
import {nav} from "../Nav.ts";
import {Link} from "react-router-dom";
import './Footer.scss';
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__body">
                    <h2 className="footer__footer">Просто футер</h2>
                    <nav className="footer__nav">
                        {nav.map((item, index) => (<Link key={index} to={item.link}>
                            <p className="footer__link">{item.title}</p>
                        </Link>))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;