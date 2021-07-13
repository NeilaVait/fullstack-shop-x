import React, { Component } from 'react';
import ShopList from '../components/shopList';
import ShopSingleItem from '../components/shopSingleItem';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/common/socialLinks';
import Cart from '../components/cart/cart';
import { getUsers } from './../utils/requests';
import Button from './../components/common/button/button';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    let usersCopy = [...this.state.users];
    usersCopy = await getUsers();
    this.setState({ users: usersCopy });
  }

  render() {
    const { socialLinksData, shopCategories, items, cart } = this.props.shop;
    return (
      <div className="shop-page">
        <div className="shop-search-cart d-flex space-between mb-1">
          <div className="shop-search">
            <i className="fa fa-search"></i>
            <input type="search" placeholder="Search" />
          </div>
          <Link to="/shop/cart" className="shop-cart">
            <i className="fa fa-shopping-cart"></i>Cart ({this.props.cartCount && this.props.cartCount})
          </Link>
        </div>
        <div className="hr"></div>
        <div className="d-flex aside-main-container">
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
            <div className="users">
              <h3>Users</h3>
              <ul>
                {this.state.users &&
                  this.state.users.map((u) => (
                    <li key={u._id}>
                      <p>
                        {u.name}, {u.email}
                      </p>
                      <Button onClick={() => this.props.onLogin(u._id, u.email)} size="medium">
                        Login
                      </Button>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>

          <main className="shop-items-part">
            <Route
              path="/shop/item/:id"
              render={(props) => (
                <ShopSingleItem
                  onCartCount={this.props.onCartCount}
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
      </div>
    );
  }
}

export default Shop;

// shop-item atvaizduoti 1 preke panasiai kaip yra pavyzdyje
