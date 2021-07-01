import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    const { price, title, image } = this.props.item;
    return (
      <div className="shop-item">
        <img src={require(`../static/shop/${image}3.jpg`).default} alt={title} />
        <h5 className="item-title">{title}</h5>
        <p className="item-price">{price} eur</p>
      </div>
    );
  }
}

export default ShopItem;
