import React from 'react';
import propTypes from 'prop-types';

class ItemCart extends React.Component {
  render() {
    const { cartItensArray } = this.props;
    const { title, price, thumbnail } = cartItensArray;
    console.log(cartItensArray);
    return (
      <div className="intemsCart">
        {' '}
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }
}

ItemCart.propTypes = {
  cartItensArray: propTypes.shape({
    title: propTypes.string,
    price: propTypes.number,
    thumbnail: propTypes.string,
    sold_quantity: propTypes.number,
  }).isRequired,
};

export default ItemCart;
