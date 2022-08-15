import React from 'react';
import {ReactComponent as BlackJackIcon} from '../assets/img/blackjack-icon.png';

const HomeHeader = () => {

    return (
        <header className='home-header'>
            <nav className='flex'>
                <div className='logo'>
                    {/* <BlackJackIcon/> */}
                    BlackJack
                </div>
            </nav>
        </header>
    );
};

export default HomeHeader;
