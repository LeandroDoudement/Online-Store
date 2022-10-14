import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
// import propTypes from 'prop-types';
import Product from '../components/Product';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      checkValue: false,
      searchResult: {},

    };
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    const { searchField } = this.state;
    const categories = await getProductsFromCategoryAndQuery(false, searchField);
    if (!categories) {
      this.setState({
        checkValue: false,
      });
    } else {
      this.setState({
        checkValue: true,
        searchResult: categories,
      });
    }
  };

  getCategorieProducts = async ({ target }) => {
    const response = await getProductsFromCategoryAndQuery(target.id);
    const { results } = response;
    this.setState({
      checkValue: true,
      searchResult: { results },
    });
  };

  render() {
    const { searchField,
      checkValue, searchResult } = this.state;
    return (
      <div className="divHome">
        <div className="divHomeForm">
          <Link to="/cart" data-testid="shopping-cart-button">Go to cart page</Link>
          <input
            autoComplete="off"
            value={ searchField }
            onChange={ this.onChange }
            name="searchField"
            type="text"
            data-testid="query-input"
          />
          <button
            className="buttonSearch"
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <h3
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <Categories getProducts={ this.getCategorieProducts } />
        </div>
        <div className="divHomeProducts">
          {checkValue ? searchResult.results.map((element, index) => (
            <Product
              objItem={ element }
              key={ index }
              productName={ element.title }
              productPrice={ Number(element.price) }
              productImage={ element.thumbnail }
              productId={ element.id }
            />)) : <p>Nenhum produto foi encontrado</p>}
        </div>
      </div>
    );
  }
}

// Home.propTypes = {
//   getCartItensArray: propTypes.func.isRequired,
// };

export default Home;
