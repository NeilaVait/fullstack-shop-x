import React, { Component } from 'react';
import Button from '../common/button/button';
import CartList from './cartList';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: 0,
    };
  }
  render() {
    return (
      <div>
        <div className="cartList">
          <CartList cartItems={this.props.cartItems} />
        </div>
        <div className="d-flex">
          <div className="cart__instructions">
            <label htmlFor="instructions">Special instructions for seller</label>
            <br />
            <textarea name="" id="instructions" cols="30" rows="10"></textarea>
          </div>
          <div className="cart-info">
            <h4 className="cart__title">
              Subtotal <span>{this.state.cartTotal} eur</span>
            </h4>
            <i>Taxes and shipping calculated at checkout</i>
            <Button outline>Continue Shopping</Button>
            <br />
            <Button>Checkout</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
