import React, { Component } from 'react';
import ShopList from '../components/shopList';

class Shop extends Component {
  render() {
    const { socialLink, shopCategories } = this.props.shop;
    return (
      <div className="shop-page d-flex">
        <aside className="categories-aside">
          <div className="categories">
            <ul>
              {shopCategories.map((item) => (
                <li key={item._id} className="category-item">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="social">
            {socialLink.map((item) => (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noreferrer"
                className="social__link"
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </aside>
        <main>
          <ShopList />
        </main>
      </div>
    );
  }
}

export default Shop;

// shop-item atvaizduoti 1 preke panasiai kaip yra pavyzdyje
