import { useSelector } from "react-redux";
import CartItems from "./cartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <div className="cart">
        <h2>Cart</h2>
      </div>
      <CartItems data={cartItems} />
    </div>
  );
};

export default Cart;
