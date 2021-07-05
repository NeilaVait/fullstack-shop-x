import { Link } from 'react-router-dom';
const CartItem = (props) => {
  return (
    <div className="cart-item d-flex">
      <div className="item-preview d-flex cart-col first">
        <Link to="/">
          <img src="https://placeimg.com/150/100/people" alt="sdsds" />
        </Link>
        <div className="order-item-info">
          <Link to="/">
            <h4>title</h4>
          </Link>
          <p>color / size</p>
          <button>remove</button>
        </div>
      </div>
      <div className="cart-col">
        <h3 className="price">1000 eur</h3>
      </div>
      <div className="cart-col">
        <input className="cart-qty" type="number" value="1" />
      </div>
      <div className="cart-col">
        <h3 className="price-total">1000 eur</h3>
      </div>
    </div>
  );
};

export default CartItem;
