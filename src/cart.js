import { useSelector, useDispatch } from "react-redux";
import CartItems from "./cartItems";
import { clearCart } from "./util/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="cart">
        <h2>Cart</h2>
        <button className="clearcartbtn" onClick={handleclearcart}>
          Clear Cart
        </button>
      </div>
      <div className="cartitems">
        {cartItems.length === 0 && <h3>Add Somthing Delicious 😋</h3>}
      </div>
      <CartItems data={cartItems} />
    </div>
  );
};

export default Cart;
