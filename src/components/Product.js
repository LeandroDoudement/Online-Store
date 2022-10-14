import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addItem from '../services/cart';

class Products extends React.Component {
  render() {
    const { productName, productPrice, productImage,
      objItem, productId } = this.props;
    const thirty = 30;
    const twenty = 20;
    return (
      <div data-testid="product" className="product">
        <Link to={ `/productDetails/${productId}` } data-testid="product-detail-link">
          <p>
            {productName.length > thirty
              ? `${productName.substring(0, twenty)}...` : productName}
          </p>
          <p>
            R$
            {' '}
            {productPrice}
          </p>
          <img src={ productImage } alt={ productName } />
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addItem(objItem) }
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
  objItem: propTypes.shape({
    title: propTypes.string,
    price: propTypes.number,
    thumbnail: propTypes.string,
  }).isRequired,
  productId: propTypes.string.isRequired,
};

export default Products;
