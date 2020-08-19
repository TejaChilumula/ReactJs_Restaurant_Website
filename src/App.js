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
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();

class App extends Component {
  constructor(props){
    super(props);}
  render() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
        <Main />
    </div>
    </BrowserRouter>
    </Provider>
  );
}
}

export default App;
