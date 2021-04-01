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
      
          <Card>
            <CardBody>
              <CardTitle tag="h5">Project One</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Simon Says</CardSubtitle>
            </CardBody>
            <img width="80%" src="https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Simon+Says+Game+Board.png" alt="Simon Says Game Board" />
            <CardBody>
              <CardText>This is the first project I developed independently using vanilla javascript.</CardText>
              <CardLink href="#">github link</CardLink>
              <CardLink href="#">deployed app</CardLink>
            </CardBody>
          </Card>
        

        
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            </CardBody>
            <img width="80%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag="h5">Project Three</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">React Movie App</CardSubtitle>
            </CardBody>
            <img width="90%" src="https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Screen+Shot+2021-03-31+at+9.20.23+PM+(2).png" alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>


          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            </CardBody>
            <img width="80%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
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