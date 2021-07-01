import React, { Component } from 'react';

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
        <main className="shop-list"></main>
      </div>
    );
  }
}

export default Shop;
// susikurti komponentus shop-list ir shop-item

// isitaraukti shop-list i shop

// isitraukti shop-item i shop-list

// shop-item atvaizduoti 1 preke panasiai kaip yra pavyzdyje
