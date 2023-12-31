import React from 'react';

function Navigation({currentPage, handlePageChange}) {
    return (
        <ul className="nav nav-tabs" align="center">
            <li className="nav-item">
                <a href ="#home" onClick ={() => handlePageChange('Home')} className={currentPage ==='Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li className="nav-item">
                <a href ="#contact" onClick={() => handlePageChange('Contact')} className={currentPage ==='Contact' ? 'nav-link active' : 'nav-link'}> Contact </a>
            </li>
            <li className="nav-item">
                <a href ="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a href ="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
        </ul>
    )
}

export default Navigation;