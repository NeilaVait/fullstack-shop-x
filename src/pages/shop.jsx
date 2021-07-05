import React, { Component } from 'react';
import ShopList from '../components/shopList';
import ShopSingleItem from '../components/shopSingleItem';
import { Route, Switch } from 'react-router';
import SocialLinks from '../components/common/socialLinks';
import Cart from '../components/cart/cart';
class Shop extends Component {
  render() {
    const { socialLinksData, shopCategories, items, cart } = this.props.shop;
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
          <SocialLinks socialLink={socialLinksData} />
        </aside>
        <main>
          <Route
            path="/shop/item/:id"
            render={(props) => (
              <ShopSingleItem
                // item={items.find((i) => i._id === props.match.params.id)}
                socialLinksData={socialLinksData}
                items={items}
                {...props}
              />
            )}
          />
          <Route exact path="/shop/cart" render={(props) => <Cart cartItems={cart} {...props} />} />
          <Route exact path="/shop" render={(props) => <ShopList items={items} {...props} />} />
        </main>
      </div>
    );
  }
}

export default Shop;

// shop-item atvaizduoti 1 preke panasiai kaip yra pavyzdyje
