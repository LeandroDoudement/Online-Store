import React from 'react';
import propTypes from 'prop-types';
import '../styles/ItemCart.css';

class ItemCart extends React.Component {
  render() {
    const {
      cartItensArray,
      removerItem,
      aumentarQuantidade,
      diminuirQuantidade,
    } = this.props;
    const { title, price, thumbnail, id, quantidade } = cartItensArray;
    return (
      <div className="divItemscart">
        <div className="intemsCart">
          <div className="image">
            <button
              data-testid="remove-product"
              type="button"
              onClick={ () => removerItem(id) }
            >
              Excluir

            </button>
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
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => diminuirQuantidade(id) }
            >
              -

            </button>
            <p data-testid="shopping-cart-product-quantity">{quantidade}</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => aumentarQuantidade(id) }
            >
              +

            </button>
          </div>
          <p>
            R$
            {' '}
            {price * quantidade}
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
    id: propTypes.string,
    quantidade: propTypes.number,
  }).isRequired,
  removerItem: propTypes.func.isRequired,
  aumentarQuantidade: propTypes.func.isRequired,
  diminuirQuantidade: propTypes.func.isRequired,
};

export default ItemCart;
