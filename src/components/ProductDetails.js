import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { getProductById } from '../services/api';
import addItem from '../services/cart';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetails = await getProductById(id);
    this.setState({ product: productDetails, loading: false });
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id } } } = this.props;
    if (prevProps.match.params.id !== id) {
      this.componentDidMount();
    }
  }

  addCart = () => {
    const { product } = this.state;
    addItem(product);
  };

  render() {
    const { product, loading } = this.state;
    if (loading) {
      return <p>Carregando...</p>;
    }
    return (
      <div className="productDetails">
        <div>
          <p
            data-testid="product-detail-name"
          >
            {product.title}

          </p>
          <p
            data-testid="product-detail-price"
          >
            {product.price}

          </p>
          <img
            src={ product.thumbnail }
            alt={ product.title }
            data-testid="product-detail-image"
          />
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addCart }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          Go to cart Page
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
  // getCartItensArray: propTypes.func.isRequired,
};

export default ProductDetails;
