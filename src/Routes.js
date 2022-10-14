import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './components/ProductDetails';

class Router extends React.Component {
  constructor() {
    super();
    this.state = {
      // cartItensArray: [],
    };
  }

  // getCartItensArray = (itemObj) => {
  //   const { cartItensArray } = this.state;
  //   const arrayObjItens = [...cartItensArray, itemObj];
  //   this.setState({
  //     cartItensArray: arrayObjItens,
  //   });
  // };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ () => (<Home />) }
        />
        <Route
          path="/cart"
          render={ () => (<ShoppingCart />) }
        />
        <Route
          path="/productDetails/:id"
          render={ (props) => (<ProductDetails
            // getCartItensArray={ this.getCartItensArray }
            { ...props }
          />) }
        />
      </Switch>
    );
  }
}

export default Router;
