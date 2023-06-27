import React from 'react';


export default function Resume() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('lennoxcurrentresume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'lennoxcurrentresume.pdf';
                alink.click();
            })
        })
    }
    
       
      
      return (
          <div>
            <h4 align="center">An enthusiastic and experienced educator, an excited computer programmer, a passion for social issues, and a creative problem solver, all combined into one reliable human!  </h4>
                  <h5> Programming Proficiences </h5>
                  <ul>
                    <li>Javascripts ES6+</li>
                    <li>NodeJs</li>
                    <li>Git</li>
                    <li>Restful API's</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                  </ul>
              <center>
                  
                  
                  
                  <button onClick={onButtonClick}>
                      Download my Current Resume
                  </button>
              </center>
          </div>
      );
  };
    
  
 