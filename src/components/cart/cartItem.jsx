import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/button/button';
import { getSingleItem } from '../../utils/requests';

class CartItem extends Component {
  state = {
    qty: 0,
    image: '',
    total: null,
    maxItemInStock: null,
  };

  async getCurrentItemWarehouseStock() {
    const currentItem = await getSingleItem(this.props.item.itemId);
    return currentItem.quantity;
  }

  getTotal() {
    return this.state.qty * this.props.item.price;
  }

  fixMaxItemStock(newCartQuantity) {
    const { qty: itemsInCart, maxItemInStock } = this.state;
    // what is total item qty
    const itemQtyCartAndWarehouse = +itemsInCart + maxItemInStock;
    // if we try to set it to more return max
    if (newCartQuantity > itemQtyCartAndWarehouse) {
      // jei bandom ivesti daugiau nei turim krepselyje ir liko sandelyje tai grazinam maximalu kieki
      return itemQtyCartAndWarehouse;
    }
    return newCartQuantity;
  }

  handleQty = ({ target }) => {
    if (target.value < 0) return;

    this.setState({ qty: +this.fixMaxItemStock(target.value) });

    this.props.onQuantity(this.props.item._id, this.fixMaxItemStock(target.value));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.qty !== this.state.qty) {
      this.setState({ total: this.getTotal() });
    }
  }

  componentDidMount() {
    (async () => {
      const warehouseQty = await this.getCurrentItemWarehouseStock();
      console.log(warehouseQty);
      const { image, quantity } = this.props.item;
      const imgImported = require(`../../static/shop/${image}1.jpg`).default;
      await this.setState({ qty: quantity, image: imgImported, total: this.getTotal(), maxItemInStock: warehouseQty });
    })();
  }

  render() {
    const { price, title, color, size } = this.props.item;
    return (
      <div className="cart-item d-flex">
        <div className="item-preview d-flex cart-col first">
          <Link to="/">
            <img src={this.state.image} alt="sdsds" />
          </Link>
          <div className="order-item-info">
            <Link to="/">
              <h4>{title}</h4>
            </Link>
            <p>
              {color} / {size}
            </p>
            <Button link>remove</Button>
          </div>
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Price</h3>
          <h3 className="price">{+price.toFixed(2)} eur</h3>
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Quantity</h3>
          <input className="cart-qty" type="number" value={this.state.qty} onChange={this.handleQty} />
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Total</h3>
          <h3 className="price-total">{this.state.total && +this.state.total.toFixed(2)} eur</h3>
        </div>
      </div>
    );
  }
}

export default CartItem;
