import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import Admin from './pages/admin';
import 'font-awesome/css/font-awesome.css';
import Footer from './components/footer';
// import axios from 'axios';
import { getItems, getCategories } from './utils/requests';

class App extends Component {
  state = {
    currentUser: {},
    navLinks: [
      { to: '/', title: 'Home' },
      { to: '/shop', title: 'Shop' },
      { to: '/about', title: 'About' },
      { to: '/admin', title: 'Admin' },
    ],
    shop: {
      shopCategories: [],
      socialLinksData: [
        { to: 'https://www.facebook.com', icon: 'fa fa-facebook', title: 'share' },
        { to: 'https://www.twitter.com', icon: 'fa fa-twitter', title: 'tweet' },
        { to: 'https://www.instagram.com', icon: 'fa fa-instagram', title: 'pin it' },
      ],
      items: [],
      cart: {
        randomId: [
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
      users: [
        {
          name: 'Bob Stone',
          email: 'bob@stone.com',
          password: 'pass',
        },
      ],
    },
  };

  async componentDidMount() {
    console.log('app mounted');
    this.logInUserIfInSession();
    const shopCopy = { ...this.state.shop };
    shopCopy.shopCategories = await getCategories();
    shopCopy.items = await getItems();
    this.setState({ shop: shopCopy });
  }

  logInUserIfInSession() {
    //pasitikrinti ar tra user sesijoj ir nustatyti jei yra
    const currentUserInSession = sessionStorage.getItem('loggedInUserId');
    const currentUserInSessionEmail = sessionStorage.getItem('loggedInUserEmail');
    if (currentUserInSession) {
      this.setState({ currentUser: { _id: currentUserInSession, email: currentUserInSessionEmail } });
    }
  }

  handleLogin = (userId, userEmail) => {
    // autentifikuoti useri
    sessionStorage.setItem('loggedInUserId', userId);
    sessionStorage.setItem('loggedInUserEmail', userEmail);
    this.setState({ currentUser: { _id: userId, email: userEmail } });
  };

  render() {
    const { navLinks, shop, currentUser } = this.state;
    return (
      <div className="App">
        <HeaderX currentUser={currentUser} navLinks={navLinks} />
        <div className="container">
          <Switch>
            {/* kai reikia perduoti props i route  mes tai darom su sekancia sintaxe */}
            <Route exact path="/admin" component={Admin} />
            <Route path="/shop" render={(props) => <Shop onLogin={this.handleLogin} shop={shop} {...props} />} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer navLinks={navLinks} />
      </div>
    );
  }
}

export default App;
