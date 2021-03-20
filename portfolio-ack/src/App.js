
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
  




  rendera(){
  return (
    <div className="App">
      testing page
    </div>
  );
}
}

export default App;
