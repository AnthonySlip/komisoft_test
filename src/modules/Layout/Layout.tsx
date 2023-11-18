import React from 'react';
import Header from "../../components/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer/Footer.tsx";
import './layout.scss';

const Layout: React.FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main"><Outlet/></main>
            <Footer/>
        </div>
    )
}

export default Layout;