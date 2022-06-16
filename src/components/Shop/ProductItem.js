import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  //           itemId: newItem.id,
  //           price: newItem.price,
  //           quantity: 1,
  //           totalPrice: newItem.price,
  //           name: newItem.title,

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
