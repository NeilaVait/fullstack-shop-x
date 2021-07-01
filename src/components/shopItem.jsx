import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShopItem extends Component {
  render() {
    const { price, title, image } = this.props.item;
    return (
      <div className="shop-item">
        <Link to="/shop/item/1">
          <img src={require(`../static/shop/${image}3.jpg`).default} alt={title} />
          <h5 className="item-title">{title}</h5>
          <p className="item-price">{price} eur</p>
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
