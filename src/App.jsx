import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import 'font-awesome/css/font-awesome.css';
import Footer from './components/footer';
import axios from 'axios';

class App extends Component {
  state = {
    navLinks: [
      { to: '/', title: 'Home' },
      { to: '/shop', title: 'Shop' },
      { to: '/about', title: 'About' },
    ],
    shop: {
      shopCategories: [
        { _id: 1, title: 'Accessories' },
        { _id: 2, title: 'Denim' },
        { _id: 3, title: 'Footwear' },
        { _id: 4, title: 'Jeans' },
        { _id: 5, title: 'Jackets' },
      ],
      socialLinksData: [
        { to: 'https://www.facebook.com', icon: 'fa fa-facebook', title: 'share' },
        { to: 'https://www.twitter.com', icon: 'fa fa-twitter', title: 'tweet' },
        { to: 'https://www.instagram.com', icon: 'fa fa-instagram', title: 'pin it' },
      ],
      items: [
        {
          _id: 1,
          title: 'Green hat',
          price: 99.99,
          salePrice: 49.99,
          image: 'acc_hat_01_',
          color: 'green',
          sizeQty: [
            { size: 'small', quantity: 10 },
            { size: 'medium', quantity: 7 },
            { size: 'large', quantity: 15 },
          ],
          images: [1, 2, 3, 4, 5],
          sku: 'hat_01',
          category: 'accessories',
        },
        {
          _id: 2,
          title: 'Stealth Bomber Jacket',
          price: 1599.95,
          image: 'acc_jacket_01_',
          color: 'navy',
          size: 'normal',
          images: [1, 2, 3],
          category: 'jackets',
        },
        {
          _id: 3,
          title: 'Feather Slim Fit Denim Jeans',
          price: 1299.95,
          image: 'denim_01_',
          color: 'indigo',
          size: 'normal',
          images: [1, 2, 3],
          category: 'jeans',
        },
        {
          _id: 4,
          title: 'Suede Combat Boots - Grey',
          price: 1299.95,
          image: 'shoe_01_',
          color: 'grey',
          size: 'normal',
          images: [1, 2, 3, 4],
          category: 'shoes',
        },
        {
          _id: 5,
          title: 'Suede Combat Boots - Stone',
          price: 1299.95,
          image: 'shoe_02_',
          color: 'stone',
          size: 'normal',
          images: [1, 2, 3, 4],
          category: 'shoes',
        },
      ],
      cart: [
        {
          _id: 1,
          title: 'Green hat',
          price: 99.99,
          image: 'acc_hat_01_',
          color: 'green',
          size: 'normal',
          sku: 'hat_01',
          quantity: 1,
          // userId: link to user
        },
        {
          _id: 2,
          title: 'Feather Slim Fit Denim Jeans',
          price: 1299.95,
          image: 'denim_01_',
          color: 'indigo',
          size: 'normal',
          sku: '01',
          quantity: 2,
        },
      ],
    },
  };

  async componentDidMount() {
    console.log('app mounted');
    // axios
    //   .get('http://localhost:4000/api/shop/categories')
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));

    try {
      const { data } = await axios.get('http://localhost:4000/api/shop/categories');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { navLinks, shop } = this.state;
    return (
      <div className="App">
        <HeaderX navLinks={navLinks} />
        <div className="container">
          <Switch>
            {/* kai reikia perduoti props i route  mes tai darom su sekancia sintaxe */}
            <Route path="/shop" render={(props) => <Shop shop={shop} {...props} />} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer navLinks={navLinks} />
      </div>
    );
  }
}

export default App;
