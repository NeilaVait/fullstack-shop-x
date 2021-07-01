import React, { Component } from 'react';
import ShopItem from './shopItem';

class ShopList extends Component {
  render() {
    return (
      <div className="shop-list d-flex">
        {this.props.items.map((item) => (
          <ShopItem key={item._id} item={item} />
        ))}
      </div>
    );
  }
}

export default ShopList;
