import CartItem from './cartItem';
const CartList = (props) => {
  return (
    <div>
      <div className="cart-columns d-flex">
        <h3 className="cart-col first">Product</h3>
        <h3 className="cart-col">Price</h3>
        <h3 className="cart-col">Quantity</h3>
        <h3 className="cart-col">Total</h3>
      </div>
      <CartItem />
      <CartItem />
    </div>
  );
};

export default CartList;
