import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Price from './common/price/price';

class ShopItem extends Component {
  render() {
    const { _id, price, title, image, salePrice, quantity } = this.props.item;
    return (
      <div className="shop-item">
        <Link className="pos-rel" to={'/shop/item/' + _id}>
          <img
            className={quantity === 0 ? 'sold-out-img' : ''}
            src={require(`../static/shop/${image}3.jpg`).default}
            alt={title}
          />
          <h5 className="item-title">{title}</h5>
          {quantity === 0 ? <span>SOLD OUT</span> : <Price salePrice={salePrice}>{price}</Price>}
          {salePrice && <span className="sale">Sale</span>}
        </Link>
      </div>
    );
  }
}

export default ShopItem;

// shopSingleItem komponentas

// padaryti kad jis atsidarytu kai mes nueina i /shop/item/1

// pasirasyti jsx ir css kad atrodytu kaip pavyzyje, dydziai
// standartiniai, spalvos 3 is masyvo

// sukurti socialIcons componenta ir panaudoti ji shopSingleItem
//ir aside

// padaryti kad paspaudus ant nuotraukos ji pasikeistu kaip pagrindine
