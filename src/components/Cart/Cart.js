import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((e) => (
          <CartItem
            key={e.id}
            item={{
              id: e.id,
              title: e.name,
              quantity: e.quantity,
              total: e.totalPrice,
              price: e.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
