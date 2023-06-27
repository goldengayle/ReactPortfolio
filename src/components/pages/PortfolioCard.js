import React from 'react';

export default function PortfolioCard({title, desc, img, alt, link}) {
    return(
            <div>
              <p>{title}</p>
              <p>{desc}</p>
              <a href = {link}><img src={img} alt={alt} style={{height: "150px", width: "300px"}}/></a>
            </div>
    )
};