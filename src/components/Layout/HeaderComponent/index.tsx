import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import 'styles/header.css';

const HeaderComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className="header">
            <div className="header-left" onClick={() => navigate('/')}>
                <img src={logo} alt="logo" className="logo" />
                <div>
                    <h2>SUPPORT FUSION</h2>
                    <p>Machine Passport</p>
                </div>
            </div>
            <span
                className="header-action"
                onClick={() => navigate(isHomePage ? '/admin' : '/')}
            >
                {isHomePage ? 'Admin' : 'Back'}
            </span>
        </header>
    );
}

export default HeaderComponent