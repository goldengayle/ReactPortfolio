import React from 'react';
import PortfolioCard from './PortfolioCard';
import codeCards  from '../../assets/cardData'
import knitCards  from '../../assets/knitData'


export default  function Portfolio() {
        return(
            <div class= "float-container">
            <div class ="float-child">
              <h2 class= "portfolio-heading"> Coding Projects</h2>
              {codeCards.map((card) => (
                <PortfolioCard title={card.title} desc={card.desc} img={card.image} alt={card.alt} link={card.link}/>
              ))}
            </div>
            <div class ="float-child">
            <h2 class= "portfolio-heading"> Knitting Projects</h2>
            {knitCards.map((card) => (
                <PortfolioCard title={card.title} desc={card.desc} img={card.image} alt={card.alt} link={card.link}/>
              ))}
            </div>
            </div>
    )
    
};