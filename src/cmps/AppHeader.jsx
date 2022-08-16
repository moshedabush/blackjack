import React from 'react';
import Logo from "../assets/img/black-jack-logo.svg";

const AppHeader = () => {

    return (
        <header className='app-header'>
            <nav className='flex'>
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
