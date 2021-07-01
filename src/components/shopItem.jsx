import React, { Component } from 'react';
import mainImage from '../static/shop/acc_hat_01_3.jpg';
class ShopItem extends Component {
  render() {
    return (
      <div className="shop-item">
        <img src={mainImage} alt="blue jeans" />
        <h5 className="item-title">Blue jeans</h5>
        <p className="item-price">99 eur</p>
      </div>
    );
  }
}

export default ShopItem;
