import React from 'react'
import './Foot.css'
const Footer = () => {
  return (
    <div>
    <head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet" />
</head>
    <footer>
      <div className="footer">
        <div className="col">
    
          <a href="/"><i className="fa fa-facebook fa-lg"></i></a>
          <a href="/"><i className="fa fa-instagram fa-lg"></i></a>
          <a href="/"><i className="fa fa-youtube fa-lg"></i></a>
          <a href="/"><i className="fa fa-twitter fa-lg"></i></a>
      </div>

        <div className="row">
          <ul>
            <li><a href="/">Contact us</a></li>
            <li><a href="/">Our Services</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms & Conditions</a></li>
            <li><a href="/">Career</a></li>
          </ul>
        </div>

        <div className="row">
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Sidra 
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
