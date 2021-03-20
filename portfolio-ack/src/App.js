
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from './component/Header'
import HomePage from './component/HomePage'
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
                    
            <div className="main-body">
              <Switch>
              
              <Route exact path="/" render={(routerProps)=>(
                    <HomePage username={this.state.username} loggedIn={this.state.loggedIn}
                    logout={this.logout} {...routerProps}/>
                )}/>
  
                <Route exact path="/Projects" render={(routerProps)=>(
                    <Signup handleChangeSignUp={this.handleChangeSignUp} userSignup={this.userSignup}
                    usernameSignUp={this.state.usernameSignUp} passwordSignUp={this.state.passwordSignUp} userId={this.state.userId} {...routerProps}/>
                )}/>
  
    
                </Switch>
               </div>   
      </div>
        );
      }
    }
  export default withRouter(App);