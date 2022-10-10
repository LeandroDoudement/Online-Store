import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends React.Component {
  render() {
    const { productName, productPrice, productImage,
      getCartItens, objItem, productId } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/productDetails/${productId}` } data-testid="product-detail-link">
          <p>{productName}</p>
          <p>{productPrice}</p>
          <img src={ productImage } alt={ productName } />
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => getCartItens(objItem) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Products.propTypes = {
  productName: propTypes.string.isRequired,
  productPrice: propTypes.number.isRequired,
  productImage: propTypes.string.isRequired,
  getCartItens: propTypes.func.isRequired,
  objItem: propTypes.shape({
    title: propTypes.string,
    price: propTypes.number,
    thumbnail: propTypes.string,
  }).isRequired,
  productId: propTypes.string.isRequired,
};

export default Products;
