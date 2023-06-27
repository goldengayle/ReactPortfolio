import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faGithub,
   faLinkedin,
   faInstagram
 } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
   return(
      <div>
       <h3 align="center">@goldengayle</h3>
       <div align="center">
<div class="social-container">
      <a href="https://github.com/goldengayle"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
</div>
<div class="social-container">
      <a href="https://www.linkedin.com/in/gayle-lennox/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
</div>
<div class="social-container">
      <a href="https://www.instagram.com/goldengayle/?hl=en"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>
</div>
       </div>
       )
}