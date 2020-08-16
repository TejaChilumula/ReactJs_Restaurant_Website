import React, { Component } from 'react';
import { Navbar , NavbarBrand} from 'reactstrap';
import Menu from './components/Menucompo';
import Dish from './components/Dishdetails';
import { DISHES } from './shared/Dishes';
import './App.css';
import { render } from '@testing-library/react';
import Main from './components/Maincomponent'

class App extends Component {
  constructor(props){
    super(props);}
  render() {
  return (
    <div className="App">
        <Main />
    </div>
  );
}
}

export default App;
