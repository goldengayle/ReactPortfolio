import React from 'react';
import portrait from '../../assets/images/lennoxportrait.jpg'

export default function Home(){
    return(
        <div className= "float-container">
        <div className="float-child">
        <p>I am a multidisciplinary artist specializing in web development, fiber arts, and science curriculum design. After 11 years in public school classrooms, I am excited to explore my passion for data and computational reasoning in new environments.
        </p>
        <p> In middle school I started exploring HTML in a very new connected world, and I kept coming back to it throughout adulthood as a fun puzzle that had grown quite esoteric to my amateur eyes. </p>
        <p>As a science teacher, one of my favorite challenges was pushing students to think methodologically through procedures and calculations in their lab activities. I noticed that my most successful stuedents after two years were often torn between a love of chemistry and a love of computer science. I firmly feel these two disciplines are uniquely intertwined in terms of analytical problem solving.</p>
        <p> 
            My other hobbies include knitting, sewing, and playing board games.
        </p>
        </div>
        <div className="float-child">
        <img src={portrait} alt ="picture of Gayle Lennox at the Renaissance faire" class ="center" style={{height: "400px", width: "300px"}} />
        </div>
        </div>
    )
};