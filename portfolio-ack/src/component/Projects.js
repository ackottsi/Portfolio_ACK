import React from 'react';
import {Link} from 'react-router-dom';
import '../Projects.css';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Col, Row, Container
  } from 'reactstrap';




const Projects = (props) => {
    return (
        <div className='projects-container'>
      
          <Card className="card-container">
          <CardBody className="card-title-container">
              <CardTitle tag="h5">Project One</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Simon Says</CardSubtitle>
            <img width="80%" src="https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Simon+Says+Game+Board.png" alt="Simon Says Game Board" />
            </CardBody>
            <CardBody>
              <CardText>This is the first project I developed independently using vanilla javascript.</CardText>
              </CardBody>
             <div className='link-container'>
              <CardLink href="https://github.com/ackottsi/GA-Project-One">github repo</CardLink>
              <CardLink href="https://ackottsi.github.io/">deployed app</CardLink>
              </div>
            
          </Card>
        

        
          <Card className="card-container">
            <CardBody className="card-title-container">
              <CardTitle tag="h5">Project Two</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Movie Database App</CardSubtitle>
            <img width="80%" src="https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Project+two+screen+shot.png" alt="Card image cap" />
            </CardBody>        
            <CardBody>
              <CardText>First server side project and first group project.  Primary goals of project
                  were to learn about production deployment and using git for collaboration.
              </CardText>
              </CardBody>
              <div className='link-container'>
              <CardLink href="https://github.com/ackottsi/Project_2">github repo</CardLink>
              <CardLink href="https://movie-app-ack.herokuapp.com/">deployed app</CardLink>
              </div>
           
          </Card>



          <Card className="card-container">
          <CardBody className="card-title-container">
              <CardTitle tag="h5">Project Three</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">React Movie App</CardSubtitle>
            <img width="80%" src="https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Screen+Shot+2021-03-31+at+9.20.23+PM+(2).png" alt="Card image cap" />
            </CardBody>
            <CardBody>
              <CardText>This is a group project that is built using React.  Uses omdb API to provide data.</CardText>
            </CardBody>             
        
              <div className='link-container'>
              <CardLink href="#">github repo</CardLink>
              <CardLink href="#">deployed app</CardLink>
              </div>
          
          </Card>




          <Card className="card-container">
          <CardBody className="card-title-container">
              <CardTitle tag="h5">Project Four</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Photo Gallery App</CardSubtitle> 
            <img width="80%" src="https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Project+4+screen+shot.png" alt="Card image cap" />
            </CardBody>
            <CardBody className="bottom-card-container">
              <CardText>First full stack project.  Server side is deployed through Heroku.</CardText>
              </CardBody>
              <div className='link-container'>
              <CardLink href="#">github repo</CardLink>
              <CardLink href="#">deployed app</CardLink>
              </div>
         
          </Card>
     
        

        </div>
      );
    };
  
  export default Projects;
  





  
    //   <div className="projects-container">
    
    //       <div className="project-info-container">
    //           <h2>Project 1-Simon Says</h2>
    //           <p>
    //               This is the first project I developed independently using vanilla javascript.  &nbsp;  
    //           </p>
    //           <a className="deployed-link" href='https://ackottsi.github.io/'>Deployed Site</a>
    //           <a className="deployed-link" href='https://github.com/ackottsi/ackottsi.github.io'>Git Hub repo</a>
    //       </div>
    
    
    //       <div className="project-info-container">
    //           <h2>Project 2-Express</h2>
    //           <p>
    //               This is the first project where I used Express.  &nbsp;  Admittedly, there were quite a few 
    //               struggles on this project.  I have left it at the current state as a reminder of the progress
    //               I have made over a short amount of time.
    //           </p>
    //           <a className="deployed-link" href='https://movie-app-ack.herokuapp.com/'>Express App</a>
    //           <a className="deployed-link" href='https://github.com/ackottsi/Project_2'>Git Hub repo</a>
    //       </div>
         
    
    
    //       <div className="project-info-container">
    //           <h2>Project 3-React app</h2>
    //           <p>
    //               This was a group project. &nbsp; React was the emphasis of the project.  &nbsp;  I found
    //               implementing the search bar to be the most intersting and challenging aspect of the project.
                    
    //           </p>
    //           <a className="deployed-link" href='http://couchslothmovies.surge.sh/'>React app</a>
    //           <a className="deployed-link" href='https://github.com/ackottsi/React_Project_Three'>Git Hub repo</a>
    //       </div>
    
    
    //       <div className="project-info-container">
    //           <h2>Project 4-First Full Stack Project</h2>
    //           <p>
    //              This was the capstone project for the immersive SW course. &nbsp; The project was built from the ground up using
    //              concepts learned from the course.  &nbsp;  
                    
    //           </p>
    //           <a className="deployed-link" href='http://imagephotobookgaproject4.surge.sh/'>React app</a>
    //           <a className="deployed-link" href='https://github.com/ackottsi/image_display_front_end'>Git Hub repo</a>
    //       </div>
         
    //     </div>
    //     