import React, { Component } from 'react';
import CartItem from './cartItem';
import { getCartItems } from '../../utils/requests';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCart: [],
    };
  }

  async componentDidMount() {
    // get all cart items for currentUser
    const cartItems = await getCartItems(this.getUserIdFromSession());
    console.log(cartItems);
  }

  getUserIdFromSession() {
    const id = sessionStorage.getItem('loggedInUserId');
    return id ? id : console.error('no id in session');
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
        {this.props.cartItems.randomId.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
    );
  }
}

export default CartList;
