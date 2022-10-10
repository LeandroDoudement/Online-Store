import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { getProductById } from '../services/api';

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
    this.setState({ product: [productDetails], loading: false });
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id } } } = this.props;
    if (prevProps.match.params.id !== id) {
      this.componentDidMount();
    }
  }

  addCart = () => {
    const { product } = this.state;
    const { getCartItensArray } = this.props;
    console.log('Sou o product', product);
    getCartItensArray(...product);
    localStorage.setItem('cart', JSON.stringify(...product));
  };

  render() {
    const { product, loading } = this.state;

    return (
      <div className="productDetails">
        {loading ? <p>Carregando...</p>
          : product.map((element, index) => (
            <div key={ index }>
              <p data-testid="product-detail-name">{element.title}</p>
              <p data-testid="product-detail-price">{element.price}</p>
              <img
                src={ element.thumbnail }
                alt={ element.title }
                data-testid="product-detail-image"
              />
            </div>
          ))}
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
  getCartItensArray: propTypes.func.isRequired,
};

export default ProductDetails;
