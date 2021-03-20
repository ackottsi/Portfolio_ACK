import React from 'react';
import {Link} from 'react-router-dom';
import '../Projects.css';




const Projects = (props) => {
    return (  
  <div className="projects-container">

      <div className="project-info-container">
          <h2>Project 1-Simon Says</h2>
          <p>
              This is the first project I developed independently using vanilla javascript.  &nbsp;  
          </p>
          <Link className="deployed-link" to='add-site'>Deployed Site</Link>
          <Link className="deployed-link" to='add-site'>Git Hub repo</Link>
      </div>


      <div className="project-info-container">
          <h2>Project 2-Express</h2>
          <p>
              This is the first project where I used Express.  &nbsp;  Admittedly, there were quite a few 
              struggles on this project.  I have left it at the current state as a reminder of the progress
              I have made over a short amount of time.
          </p>
          <Link className="deployed-link" to='add-site'>Deployed Express App</Link>
          <Link className="deployed-link" to='add-site'>Git Hub repo</Link>
      </div>
     


      <div className="project-info-container">
          <h2>Project 3-React app</h2>
          <p>
              This was a group project. &nbsp; React was the emphasis of the project.  &nbsp;
                
          </p>
          <Link className="deployed-link" to='add-site'>React app</Link>
          <Link className="deployed-link" to='add-site'>Git Hub repo</Link>
      </div>
     
    </div>
    )
  }
  
  export default Projects;
  