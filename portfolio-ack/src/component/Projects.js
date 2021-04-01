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
            <CardText className="text-below-image">This is the first project I developed independently using vanilla javascript.</CardText>
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
              <CardText className="text-below-image">First server side project and first group project.  Primary goals of project
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
              <CardLink href="https://github.com/ackottsi/React_Project_Three">github repo</CardLink>
              <CardLink href="http://couchslothmovies.surge.sh/">deployed app</CardLink>
              </div>
          
          </Card>




          <Card className="card-container">
          <CardBody className="card-title-container">
              <CardTitle tag="h5">Project Four</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Photo Gallery App</CardSubtitle> 
            <img width="80%" src="https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Project+4+screen+shot.png" alt="Card image cap" />
            </CardBody>
            <CardBody className="bottom-card-container">
              <CardText>First full stack project.  Server side is deployed through Heroku.
                  Front end is built using React.
              </CardText>
              </CardBody>
              <div className='link-container'>
              <CardLink href="https://github.com/ackottsi/image_display_front_end">github repo</CardLink>
              <CardLink href="http://imagephotobookgaproject4.surge.sh/">deployed app</CardLink>
              </div>
         
          </Card>
     
        

        </div>
      );
    };
  
  export default Projects;
  




