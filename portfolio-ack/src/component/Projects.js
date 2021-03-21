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
          <a className="deployed-link" href='https://ackottsi.github.io/'>Deployed Site</a>
          <a className="deployed-link" href='https://github.com/ackottsi/ackottsi.github.io'>Git Hub repo</a>
      </div>


      <div className="project-info-container">
          <h2>Project 2-Express</h2>
          <p>
              This is the first project where I used Express.  &nbsp;  Admittedly, there were quite a few 
              struggles on this project.  I have left it at the current state as a reminder of the progress
              I have made over a short amount of time.
          </p>
          <a className="deployed-link" href='https://movie-app-ack.herokuapp.com/'>Express App</a>
          <a className="deployed-link" href='https://github.com/ackottsi/Project_2'>Git Hub repo</a>
      </div>
     


      <div className="project-info-container">
          <h2>Project 3-React app</h2>
          <p>
              This was a group project. &nbsp; React was the emphasis of the project.  &nbsp;  I found
              implementing the search bar to be the most intersting and challenging aspect of the project.
                
          </p>
          <a className="deployed-link" href='http://couchslothmovies.surge.sh/'>React app</a>
          <a className="deployed-link" href='https://github.com/ackottsi/React_Project_Three'>Git Hub repo</a>
      </div>


      <div className="project-info-container">
          <h2>Project 4-First Full Stack Project</h2>
          <p>
             This was the capstone project for the immersive SW course. &nbsp; The project was built from the ground up using
             concepts learned from the course.  &nbsp;  
                
          </p>
          <a className="deployed-link" href='http://imagephotobookgaproject4.surge.sh/'>React app</a>
          <a className="deployed-link" href='https://github.com/ackottsi/image_display_front_end'>Git Hub repo</a>
      </div>
     
    </div>
    )
  }
  
  export default Projects;
  