import React, { Component } from 'react';
import { getCartItems, sendUpdateQty } from '../../utils/requests';
import Button from '../common/button/button';
import CartList from './cartList';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: 0,
      currentCart: [],
    };
  }

  async getCurrentCartItems() {
    const cartItems = await getCartItems(this.getUserIdFromSession());
    // console.log(cartItems);
    // console.log('total', this.calcTotal(cartItems));
    // patikrinti ar cart tuscias
    if (Object.keys(cartItems).length === 0) return;
    this.setState({ currentCart: cartItems, cartTotal: this.calcTotal(cartItems) });
  }

  async componentDidMount() {
    this.getCurrentCartItems();
  }

  getUserIdFromSession() {
    const id = sessionStorage.getItem('loggedInUserId');
    return id ? id : console.error('no id in session');
  }

  updateQuantity = async (itemId, newQty) => {
    // console.log('updatequantity');
    console.log(itemId, newQty);
    // iskviesti is cartitem el
    const updateOk = await sendUpdateQty(this.getUserIdFromSession(), itemId, newQty);
    if (updateOk === true) {
      console.log('ruosiames atnaujinti itemus, nes panasu kad pasikeite kiekis');
      this.getCurrentCartItems();
    }
  };

  calcTotal = (items) => {
    return items.reduce((acc, cur) => acc + cur.quantity * (cur.salePrice || cur.price), 0).toFixed(2);
  };

  render() {
    return (
      <div>
        <div className="cartList mb-2">
          <CartList onQuantity={this.updateQuantity} currentCart={this.state.currentCart} />
        </div>
        <div className="d-flex">
          <div className="cart__instructions mb-2">
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
