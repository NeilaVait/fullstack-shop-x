import React, { Component } from 'react';
import ShopItem from './shopItem';

class ShopList extends Component {
  render() {
    return (
      <div className="shop-list">
        shop list
        <ShopItem />
      </div>
    );
  }
}

export default ShopList;
