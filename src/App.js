import React, { Component } from 'react';
import { Navbar , NavbarBrand} from 'reactstrap';
import Menu from './components/Menucompo';
import Dish from './components/Dishdetails';
import { DISHES } from './shared/Dishes';
import './App.css';
import { render } from '@testing-library/react';
import Main from './components/Maincomponent'
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import {BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);}
  render() {
  return (
    <BrowserRouter>
    <div className="App">
        <Main />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
