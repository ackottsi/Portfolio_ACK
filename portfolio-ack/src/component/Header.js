import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';


const Header = (props) => {
  return (  
<div className="header-container">
    <header>
          <nav>
            <div className="Nav-Login">
            <div className="headerNav">
              <div className="logoTitleHeader">
              </div>
              <div className="headerMiddle">
                <Link className="headerLink" to="/">Home</Link>
                <Link className="headerLink" to="/">About Me</Link>
                <Link className="headerLink" to="/Projects">Projects</Link>
                <Link className="headerLink" to="/Work">Work Experience</Link>
              </div>
            </div>
         
          
            </div>
            
            <div className="headerBottomBorder"></div>
          </nav>
        
    </header>
  </div>
  )
}

export default Header;

