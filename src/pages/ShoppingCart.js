import React from 'react';
import propTypes from 'prop-types';
import ItemCart from '../components/ItemCart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = { foundElement: false };
  }

  componentDidMount() {
    this.validateItems();
  }

  validateItems = () => {
    const { cartItensArray } = this.props;
    if (!cartItensArray.length < 1) {
      this.setState({ foundElement: true });
    }
  };

  render() {
    const { cartItensArray } = this.props;
    const { foundElement } = this.state;
    return (
      <div>
        {!foundElement && (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
        {foundElement
          && cartItensArray.map((item, index) => (
            <ItemCart key={ index } cartItensArray={ item } />
          ))}
      </div>
    );
  }
}

Cart.propTypes = {
  cartItensArray: propTypes.arrayOf.isRequired,
};

export default Cart;
