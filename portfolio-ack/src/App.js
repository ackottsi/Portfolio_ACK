
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from './component/Header'
import HomePage from './component/HomePage'
import Projects from './component/Projects'
import { Component } from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){

    return (

  
            <div className="App">
  
              <Header handleChange={this.handleChange} userLogin={this.userLogin}
                    username={this.state.username} password={this.state.password} userId={this.state.userId} />
                  
              <Switch>
              
              <Route exact path="/" render={(routerProps)=>(
                    <HomePage username={this.state.username} loggedIn={this.state.loggedIn}
                    logout={this.logout} {...routerProps}/>
                )}/>
  
                <Route exact path="/Projects" render={(routerProps)=>(
                  <Projects/>
                )}/>
                   
  
    
                </Switch>
               </div>   
        );
      }
    }
  export default withRouter(App);