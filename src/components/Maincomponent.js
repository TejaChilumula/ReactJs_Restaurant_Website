import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menucompo';
import Contact from './ContactComponent';
import DishDetail from './Dishdetails';
import About from './AboutCompo';
import { DISHES } from '../shared/Dishes';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './Footercomponent';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
  const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

class Main extends Component {

  constructor(props) {
    super(props);
  }
   
  

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
           />
      );
    }
    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
    }
    return (
      <div>
        <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                <Route exact path='/contactus' component={Contact}/>
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route path='/About' component={() => <About leaders={this.props.leaders}/>}/>
                <Redirect to="/home" />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default  withRouter(connect(mapStateToProps)(Main));