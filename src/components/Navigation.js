import React from 'react';

function Navigation({currentPage, handlePageChange}) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href ="#home" onClick ={() => handlePageChange('Home')} className={currentPage ==='Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li className="nav-item">
                <a href ="#contact" onClick={() => handlePageChange('Contact')} className={currentPage ==='Contact' ? 'nav-link active' : 'nav-link'}> Contact </a>
            </li>
            <li className="nav-item">
                <a href ="#portfolio" onClick={() => handlePageChange('Portfolio')} classNem={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
        </ul>
    )
}

export default Navigation;