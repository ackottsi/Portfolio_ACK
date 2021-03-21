
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from './component/Header'
import HomePage from './component/HomePage'
import Projects from './component/Projects'
import { Component } from 'react';
import AboutMe from './component/AboutMe'
import WorkExperience from './component/WorkExperience';


class App extends Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){

    return (

  
            <div className="App">
  
              <Header />
                  
              <Switch>
              
              <Route exact path="/" render={(routerProps)=>(
                    <HomePage {...routerProps}/>
                )}/>
  
                <Route exact path="/AboutMe" render={(routerProps)=>(
                  <AboutMe/>
                )}/>

                <Route exact path="/Projects" render={(routerProps)=>(
                  <Projects/>
                )}/>

                <Route exact path="/Work" render={(routerProps)=>(
                  <WorkExperience/>
                )}/>
                   
  
    
                </Switch>
               </div>   
        );
      }
    }
  export default withRouter(App);