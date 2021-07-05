import React, { Component } from 'react';
import Button from './common/button/button';

class Cart extends Component {
  render() {
    return (
      <div>
        <div className="cartList">Cart list</div>
        <div className="d-flex">
          <div className="cart__instructions">
            <label htmlFor="instructions">Special instructions for seller</label>
            <br />
            <textarea name="" id="instructions" cols="30" rows="10"></textarea>
          </div>
          <div className="cart-info">
            <h4 className="cart__title">
              Subtotal <span>2,549.90 eur</span>
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
