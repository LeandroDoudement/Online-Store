import React from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../components/ItemCart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = { foundElement: false,
      cartItensArray: [],
    };
  }

  componentDidMount() {
    this.getCartItensArray();
  }

  getCartItensArray = () => {
    const produtosSalvos = JSON.parse(localStorage.getItem('cart'));
    if (produtosSalvos) {
      this.setState({
        cartItensArray: produtosSalvos,
        foundElement: true,
      });
    }
  };

  removerItem = (productId) => {
    const produtosSalvos = JSON.parse(localStorage.getItem('cart'));
    const result = produtosSalvos.filter((element) => (
      element.id !== productId
    ));
    this.setState({
      cartItensArray: result,
    });
    localStorage.setItem('cart', JSON.stringify(result));
  };

  aumentarQuantidade = (productId) => {
    const { cartItensArray } = this.state;
    const produto = cartItensArray.find((element) => (
      element.id === productId
    ));
    produto.quantidade += 1;
    localStorage.setItem('cart', JSON.stringify(cartItensArray));
    this.setState({
      cartItensArray,
    });
  };

  diminuirQuantidade = (productId) => {
    const { cartItensArray } = this.state;
    const produto = cartItensArray.find((element) => (
      element.id === productId
    ));
    if (produto.quantidade === 1) {
      produto.quantidade = 1;
    } else {
      produto.quantidade -= 1;
    }
    localStorage.setItem('cart', JSON.stringify(cartItensArray));
    this.setState({
      cartItensArray,
    });
  };

  render() {
    const { cartItensArray } = this.state;
    const { foundElement } = this.state;
    return (
      <>
        <Link to="/">Return to home</Link>
        <div>
          {!foundElement && (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )}
          {foundElement
          && cartItensArray.map((item) => (
            <ItemCart
              key={ item.id }
              cartItensArray={ item }
              removerItem={ this.removerItem }
              aumentarQuantidade={ this.aumentarQuantidade }
              diminuirQuantidade={ this.diminuirQuantidade }
            />
          ))}
        </div>
      </>
    );
  }
}

export default Cart;
