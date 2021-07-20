import React, { Component } from 'react';
import CartItem from './cartItem';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="cart-columns d-flex">
          <h3 className="cart-col first">Product</h3>
          <h3 className="cart-col">Price</h3>
          <h3 className="cart-col">Quantity</h3>
          <h3 className="cart-col">Total</h3>
        </div>
        {this.props.currentCart.map((item) => (
          <CartItem
            removeItemFromCart={this.props.removeItemFromCart}
            onQuantity={this.props.onQuantity}
            key={item._id}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default CartList;
