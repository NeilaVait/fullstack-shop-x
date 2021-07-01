import React, { Component } from 'react';

class Shop extends Component {
  render() {
    const { socialLink, shopCategories } = this.props.shop;
    return (
      <div className="shop-page">
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
          <div className="social"></div>
        </aside>
      </div>
    );
  }
}

export default Shop;
