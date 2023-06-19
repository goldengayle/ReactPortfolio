import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage ==='Home') {
            return <Home />;

        }
        if (currentPage ==='Contact'){
            return <Contact />;
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}