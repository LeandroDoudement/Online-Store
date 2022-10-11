import React from 'react';
import propTypes from 'prop-types';
import '../styles/ItemCart.css';

class ItemCart extends React.Component {
  render() {
    const { cartItensArray } = this.props;
    const { title, price, thumbnail } = cartItensArray;
    console.log(cartItensArray);
    return (
      <div className="divItemscart">
        <div className="intemsCart">
          <div className="image">
            <button data-testid="remove-product" type="button">Excluir</button>
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="description">
            <p
              className="itemsCart__title"
              data-testid="shopping-cart-product-name"
            >
              {title}
            </p>
          </div>
          <div className="quantity">
            <button type="button" data-testid="product-increase-quantity">-</button>
            <p data-testid="shopping-cart-product-quantity">1</p>
            <button type="button" data-testid="product-decrease-quantity">+</button>
          </div>
          <p>
            R$
            {' '}
            {price}
          </p>
        </div>
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
