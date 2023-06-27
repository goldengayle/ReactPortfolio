//import React from 'react';
import pethub from "./images/Pethub3.png"
import movierec from "./images/Movierec.png"
import svg from "./images/SVGgeneratorAPPimage.png"
import weather from "./images/WeatherScreenshot.png"

const codeCards = [
  {
        title: "PetHub",
        desc:"Collaborative Project demonstrating use of JS, MySQL, NODEJS, OOP, Express, Handlebars, bcrypt, ORM, MVC, Sequelize and Bootstrap technologies.",
        image: pethub,
        alt: "pet adoption project",
        link: "https://pet-shelter-g6.herokuapp.com/login"
    },
     {
        title: "Movie Search",
        desc:"Collaborative Project demonstrating use of HTML, CSS, Javascript, and Web Based API's",
        image: movierec,
        alt: "movie project",
        link: "https://castarke.github.io/movie-rec-repo/"

    },
     {
        title: "SVG Generator",
        desc:"This is a command line application to create a simple logo SVG image. The link goes to my Github repo where you can view a video of the application",
        image: svg,
        alt: "SVG screen",
        link:"https://github.com/goldengayle/SVGgenerator"
    },
    {
        title: "Weather Project ",
        desc:"This is an application made for class that uses API calls to show the weather forecast in American cities",
        image: weather,
        alt: "movie project",
        link: "https://goldengayle.github.io/WeatherApp/"
    }]

export default codeCards